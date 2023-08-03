import {ScrollView, StyleSheet, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ImageOnly from '../ProfileComponent/ImageOnly'
import DataBorrowCar from '../../../VisualData/DataBorrowCar'
import OrderCarList from '../ProfileComponent/OrderCarList'
import DataPost from '../../../VisualData/DataPost'
import axios from 'axios';
import url from '../../../../urlAPI';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';

const CarBorrowList = () => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const [userInfo, setUserInfo] = useState(null);


  const getData = async () => {
    if (userInfo !== null) {
        try {
            const payload = {
                id: userInfo.id
            }
            const res = await axios.post(url + '/api/Oders/OrderPayment',payload);
            setData(res.data);
        } catch (error) {
            alert("lỗi data"+ error);
        }
    }
};

const updateStatus = async () => {
      try {
        const payload = {
          customerId: userInfo.id,
          productId: data[0].id
        }
        const res = await axios.post(url + '/api/Oders/UpdateStatusRent',payload);
        
    } catch (error) {
        alert("lỗi data"+ error);
    }
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
    <View style={styles.ViewListTong}>
      <ImageOnly />
      <View style={styles.ViewList2}>
        <View style={styles.ViewListXeMuon}>
          <FlatList
            data = {data}
            renderItem={({item}) =>
            <OrderCarList
                tenxemuon = {item.name}
                ngaygiomuon = {item.gioihan}
                imgava = {item.image}
            />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default CarBorrowList;

const styles = StyleSheet.create({
    ViewListTong:{
        flex:1
    },
    ViewList1:{
        flex:2,
        backgroundColor:'blue'
    },
    ViewList2: {
        flex:8,
    },
    ViewListXeMuon:{
      flex:1,
      height:1000,
      marginBottom: 20,
    },  
})
