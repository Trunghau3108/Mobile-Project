import { ScrollView, StyleSheet, View, Text, FlatList, ActivityIndicator,DevSettings } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageOnly from '../ProfileComponent/ImageOnly'
import DataBorrowCar from '../../../VisualData/DataBorrowCar'
import OrderCarList from '../ProfileComponent/OrderCarList'
import DataPost from '../../../VisualData/DataPost'
import axios from 'axios';
import url from '../../../../urlAPI';
import moment from 'moment';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const CarBorrowList = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const [userInfo, setUserInfo] = useState(null);
  const [load, setLoad] = useState(false);

  

  const getData = async () => {
    if (userInfo !== null) {
      try {
        const payload = {
          id: userInfo.id
        }
        const res = await axios.post(url + '/api/oders/OrderPayment', payload);
        setData(res.data);
        setLoad(false);
      } catch (error) {
        alert("Hiện tại chưa có xe bạn đang thuê, vui lòng thuê xe ngay ạ");
        setLoad(false);
      }
    }
  };
  
  const updateStatus = async () => {
    try {
      const payload = {
        customerId: userInfo.id,
        productId: data[0].products[0].id
      }
      const res = await axios.post(url + '/api/oders/UpdateStatusRent', payload);
      alert("Trả xe thành công !");
      // getData()
      setData([]);
     } catch (error) {
      alert("lỗi data  " + error);
    }
  }
  
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
  useEffect(() => {

      retrieveUserInfo();

  }, []);


  useEffect(() => {

    if (isFocused) {
      getData()
    }
    setLoad(true);
  }, [userInfo, isFocused]);

  return (
    <View style={styles.ViewListTong}>
      <ImageOnly />
      <View style={styles.ViewList2}>
        <View style={styles.ViewListXeMuon}>
          {
            load ?
              (
                <ActivityIndicator size="large" />
              )
              :
              (
                <FlatList
                  data={data}
                  renderItem={({ item }) => {
                    const formattedOrderDate = moment(item.orderDate);
                    const formattedReturnDate = moment(item.returnDate);
                    const timeDifference = formattedReturnDate.diff(formattedOrderDate, 'hours');
                    const currentDate = moment();

                    let ngaygioconlai;
                    if (currentDate.isSame(formattedReturnDate, 'day')) {
                      ngaygioconlai = 'Đến ngày trả';
                    } else if (currentDate.isAfter(formattedReturnDate)) {
                      ngaygioconlai = 'Đã quá hạn trả!';
                    } else {
                      ngaygioconlai = `${timeDifference} giờ`;
                    }

                    return (
                      <>
                        {item.products.map(product => (
                          <OrderCarList
                            key={product.id}
                            tenxemuon={product.name}
                            ngaygioconlai={ngaygioconlai}
                            imgava={product.image}
                            onPress={() => { updateStatus() }}
                          />
                        ))}
                      </>
                    );
                  }}
                  keyExtractor={(item) => item.id.toString()}
                />
              )
          }
        </View>
      </View>
    </View>
  );
};

export default CarBorrowList;

const styles = StyleSheet.create({
  ViewListTong: {
    flex: 1
  },
  ViewList1: {
    flex: 2,
    backgroundColor: 'blue'
  },
  ViewList2: {
    flex: 8,
  },
  ViewListXeMuon: {
    flex: 1,
    height: 1000,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
