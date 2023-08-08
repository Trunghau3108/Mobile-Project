import { FlatList, StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

//component import
import Post from '../../ItemComponent/Posts/Post';
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';
import axios from 'axios';
import url from '../../../../urlAPI';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const History = () => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const [userInfo, setUserInfo] = useState(null);
  const [load, setLoad] = useState(false);

  const getData = async () => {
    setLoad(true);
    if (userInfo !== null) {
        try {
            const payload = {
                id: userInfo.id
            }
            const res = await axios.post(url + '/api/Oders/OrderHistory',payload);
            setData(res.data);
            setLoad(false);
            
        } catch (error) {
            alert("lỗi data"+ error);
        }
    }
};

const formatUnitPrice = (unitPrice) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(unitPrice).replace(/\B(?=(\d{3})+(?!\d))/g, "\n");
}

  useEffect(()=>{
    const retrieveUserInfo = async () => {
      try {
        const jsonString = await AsyncStorage.getItem('user');
        if (jsonString) {
          const userData = JSON.parse(jsonString);
          setUserInfo(userData);
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };

    // Retrieve user data whenever the screen gains focus
    if (isFocused) {
      retrieveUserInfo();
    }
  }, [isFocused]);

  useEffect(() => {
    getData();
  },[userInfo]);




  return (
    <View style={styles.container}>
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
      <BottomTabComp color2="#146C94" />
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});