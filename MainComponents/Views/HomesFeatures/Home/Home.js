import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Post from "../../ItemComponent/Posts/Post";
import CarListFilter from "../../ItemComponent/CarListFilter/CarListFilter";
import BottomTabComp from "../../ItemComponent/BottomtabComp/BottomTabComp";
import FilterList from "../../ItemComponent/FilterList/FilterList";
//thử data
import urlAPI from "../../../../urlAPI";
import axios from "axios";

const Home = (props) => {
  const route = useRoute();
  const [data, setData] = useState([]);

  const email = props.email;
  //thuc hien lay data
  // chạy link backend trước, sau đó lấy link localhost backend để chạy public server ngrok
  const getDataAPI = async () => {
    let res = await axios.post(urlAPI + "/api/categories/GetListCategory");
    setData(res.data);
    console.log(urlAPI);
    console.log(res.data);
    
  };
  useEffect(() => {
    getDataAPI();
  }, []);

  return (
    <View style={styles.container}>
      <FilterList
        where={route.params.whereCar}
        rentcar={route.params.selectedRentCar}
        returncar={route.params.selectedReturnCar}
      />
      <View style={styles.scrollview1}>
        <View style={styles.view3}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Post
                giamgia={item.discount}
                tenxe={item.name}
                gia={item.unitPrice}
                map="Map"
              />
            )}
          />
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
