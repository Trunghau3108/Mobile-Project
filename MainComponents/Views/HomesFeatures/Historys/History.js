import { FlatList, StyleSheet, View, Dimensions } from 'react-native'
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


  const getData = async () => {
    if (userInfo !== null) {
        try {
            const payload = {
                id: userInfo.id
            }
            const res = await axios.post(url + '/api/Oders/OrderHistory',payload);
            setData(res.data);
            
        } catch (error) {
            alert("lỗi data"+ error);
        }
    }
};

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
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Post
            giamgia={item.discount}
            khcach={item.khcach}
            tenxe={item.tenxe}
            hopso={item.hopso}
            nhienlieu={item.nhienlieu}
            kieuxe={item.kieuxe}
            tienich1={item.tienich1}
            tienich2={item.tienich2}
            tienich3={item.tienich3}
            gia={item.unitPrice}
            imguri={item.image}
          />
        )}
      />
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