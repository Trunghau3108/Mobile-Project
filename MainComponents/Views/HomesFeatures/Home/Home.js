import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import Post from "../../ItemComponent/Posts/Post";
import { useNavigation } from '@react-navigation/native';
import CarListFilter from "../../ItemComponent/CarListFilter/CarListFilter";
import BottomTabComp from "../../ItemComponent/BottomtabComp/BottomTabComp";
import FilterList from "../../ItemComponent/FilterList/FilterList";
//thử data
import url from "../../../../urlAPI";
import axios from "axios";

const Home = (props) => {
  const route = useRoute();
  const isLoggingDoneRef = useRef(false);
  const nagivation = useNavigation();

  const [isLoaiXe, setIsLoaiXe] = useState("");
  const [isChoNgoi, setIsChoNgoi] = useState(null);

  const [isHang, setIsHang] = useState("");   
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [load, setLoad] = useState(false);
  //daj

  const getData = async () => {
    setLoad(true);
    let res = await axios.post(url + "/api/products/GetListProduct");
    setData(res.data);
    setLoad(false);
  }

  //sếp giá từ cao tới thấp
  const sortByUnitPriceDescending = () => {
    setLoad(true);
    const sortedData = data.slice().sort((a, b) => b.unitPrice - a.unitPrice);
    setData(sortedData);
    console.log('sếp giá từ cao tới thấp');
    setLoad(false);
  }

  //sếp giá từ thấp tới cao
  const sortByUnitPriceAscending = () => {
    setLoad(true);
    const sortedData = data.slice().sort((a, b) => a.unitPrice - b.unitPrice);
    setData(sortedData);
    console.log('sếp giá từ thấp tới cao');
    setLoad(false);
  }

  const formatUnitPrice = (unitPrice) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return formatter.format(unitPrice).replace(/\B(?=(\d{3})+(?!\d))/g, "\n");
  }

  const handleLoc = async () => {
    setLoad(true);
    try{
     let payload = {
        Seats: isChoNgoi,
        TypeCar: isLoaiXe,
        Id: isHang
      }
      let res = await axios.post(url + "/api/products/SearchProduct",payload);
      if(res.status === 200){
        setData(res.data);
      }
      setLoad(false);
    }catch(error){
      console.log("Lỗi hệ thống" +error)
      alert("Không tìm thấy xe trong hệ thống");
      getData();
    }
  }

  
  const handleFilterChange = (loaiXe, kieuXe, hang) => {
    if (loaiXe !== undefined) {
      setIsLoaiXe(loaiXe);
    }
    if (kieuXe !== undefined) {
      setIsChoNgoi(kieuXe);
    }
    if (hang !== undefined) {
      setIsHang(hang);
    }
    if (!isLoggingDoneRef.current) {
      isLoggingDoneRef.current = true;
    }
  };

  useEffect(() => {
    getData();
    handleFilterChange();
  }, [isChoNgoi, isLoaiXe, isHang]);


  useEffect(() => {
    const filtered = data.filter(item => item.automotives.length > 0);
    setFilteredData(filtered);
  }, [data]);

  return (
    <View style={styles.container}>
      <FilterList
        where={route.params.whereCar}
        rentcar={route.params.selectedRentCar}
        returncar={route.params.selectedReturnCar}
        funcUp={sortByUnitPriceDescending}
        funcDown={sortByUnitPriceAscending}
        isLoaiXe={isLoaiXe}
        isChoNgoi={isChoNgoi}
        isHang={isHang}
        onFilterChange={handleFilterChange}
        onPressLoc={handleLoc}
      />
      <View style={styles.scrollview1}>
        <View style={styles.view3}>
          {load ? (
            <ActivityIndicator size="large" />
          )
            :
            (
              <FlatList
                style={{ marginBottom: 70 }}
                data={data}
                renderItem={({ item }) => (
                  <Post
                    giamgia={item.discount}
                    tenxe={item.name}
                    gia={formatUnitPrice(item.unitPrice)}
                    imguri={item.image}
                    onPress={()=>{nagivation.navigate("CarDetail", {
                      id: item.id,
                      coupon: item.discount,
                      whereCar: route.params.whereCar,
                      rentCar: route.params.selectedRentCar,
                      returnCar: route.params.selectedReturnCar,
                    });}}
                    map="Map"
                    kieuxe={item.automotives.length > 0 ? item.automotives[0]?.seats : 'Không hỗ trợ'}
                    nhienlieu={item.automotives.length > 0 ? item.automotives[0]?.fuel : 'Không hỗ trợ'}
                    hopso={item.automotives.length > 0 ? item.automotives[0]?.engine : 'Không hỗ trợ'}
                    tienich1={item.automotives.length > 0 ? (item.automotives[0]?.ac ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                    tienich2={item.automotives.length > 0 ? (item.automotives[0]?.gps ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                    tienich3={item.automotives.length > 0 ? (item.automotives[0]?.bluetooth ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                    khcach={item.automotives.length > 0 ? item.automotives[0]?.location : 'Không xa'}
                  />
                )}
              />
            )
          }
        </View>
      </View>
      <BottomTabComp color3="#146C94" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    padding: 5,
  },
  scrollview1: {
    height: "70%",
  },
  view3: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    height: 1000,
  },
});