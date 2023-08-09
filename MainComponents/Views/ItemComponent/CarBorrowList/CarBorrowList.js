import { ScrollView, StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native'
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

const CarBorrowList = () => {
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
        const res = await axios.post(url + '/api/Oders/OrderPayment', payload);
        setData(res.data);
        console.log(res.data);
        setLoad(false);
      } catch (error) {
        alert("lỗi data" + error);
      }
    }
  };

  const updateStatus = async () => {
    try {
      const payload = {
        customerId: userInfo.id,
        productId: data[0].id
      }
      const res = await axios.post(url + '/api/Oders/UpdateStatusRent', payload);

    } catch (error) {
      alert("lỗi data" + error);
    }
  }

  useEffect(() => {
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

    if (isFocused) {
      retrieveUserInfo();
    }
  }, [isFocused]);


  useEffect(() => {
    getData();
  }, [userInfo]);

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
