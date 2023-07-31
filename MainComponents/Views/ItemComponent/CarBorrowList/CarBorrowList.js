import {ScrollView, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import ImageOnly from '../ProfileComponent/ImageOnly'
import DataBorrowCar from '../../../VisualData/DataBorrowCar'
import OrderCarList from '../ProfileComponent/OrderCarList'
import DataPost from '../../../VisualData/DataPost'


const CarBorrowList = () => {
  return (
    <View style={styles.ViewListTong}>
      <ImageOnly />
      <View style={styles.ViewList2}>
        <View style={styles.ViewListXeMuon}>
          <FlatList
            data = {DataPost}
            renderItem={({item}) =>
            <OrderCarList
                tenxemuon = {item.tenxe}
                ngaygiomuon = {item.gioihan}
                imgava = {item.uri}
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
