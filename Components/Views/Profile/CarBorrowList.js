import {  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React from 'react'
import ImageOnly from './ProfileComponent/ImageOnly'
import DataBorrowCar from '../../VisualData/DataBorrowCar'
import OrderCarList from './ProfileComponent/OrderCarList'
const CarBorrowList = () => {
  return (
    <View style = {styles.ViewListTong}>
      <ImageOnly/>
      <View style = {styles.ViewList2}>
        <ScrollView style = {styles.ViewListXeMuon}>
          <FlatList
            data = {DataBorrowCar}
            renderItem={({item}) =>
            <OrderCarList
                tenxemuon = {item.tenxemuon}
                ngaygiomuon = {item.ngaygiomuon}
                avaxemuon = {item.imgava}
            />
            }
          />
        </ScrollView>
      </View>
    </View>
  )
}

export default CarBorrowList

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
      // marginBottom:20,
    },  
})