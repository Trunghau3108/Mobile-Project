import { ScrollView, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageOnly from '../ProfileComponent/ImageOnly'
import DataBorrowCar from '../../../VisualData/DataBorrowCar'
import OrderCarList from '../ProfileComponent/OrderCarList'
import DataPost from '../../../VisualData/DataPost'
import axios from 'axios'
import url from '../../../../urlAPI'

const CarBorrowList = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const getData = async () => {
    setLoad(true);
    let res = await axios.post(url + "/api/products/GetListProduct");
    setData(res.data);
    setLoad(false);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.ViewListTong}>
      <ImageOnly />
      <View style={styles.ViewList2}>
        <View style={styles.ViewListXeMuon}>
          {
            load? 
            (
              <ActivityIndicator size = "large" />
            )
            :
            (
              <FlatList
              data={DataPost}
              renderItem={({ item }) => (
                <OrderCarList
                  tenxemuon={item.tenxe}
                  ngaygiomuon={item.gioihan}
                  imgava={item.uri}
                />
              )}
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
