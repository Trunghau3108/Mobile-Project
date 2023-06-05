import { ScrollView, StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import MapView, {Marker} from 'react-native-maps';
import { Entypo, AntDesign } from '@expo/vector-icons';
import CarCard from '../CarCards/CarCard';
import DataPost from '../../VirtualData/DataPost';

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.dropdownView,{backgroundColor:'red'}]}></View>
      <View style={[styles.dropdownView,{flexDirection: 'row'}]}>
        <Entypo name="list" size={24} color="black" />
        <Text style={styles.textDropdown}></Text>
        <AntDesign name="down" size={24} color="black" />
      </View>
      <MapView style={styles.map}/>
      <View style={styles.pageView}>
        <FlatList
          horizontal={true}
          style={{paddingLeft: 50}}
          data={DataPost}
          renderItem={({item}) =>
            <CarCard
              imguri={item.uri}
              tenxe={item.tenxe}
              gia={item.gia}
            />
          }
        />
        </View>
    </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    dropdownView: {
      height:70,
      justifyContent: 'center',
      marginHorizontal: '5%',
    },
    pageView: {
      width:'100%',
      paddingVertical: 10,
      position:'absolute',
      marginTop: 555,
    },
    page: {
      width:250,
      height: 150,
      backgroundColor: 'red',
      borderRadius: 15,
      marginRight: 10,
    },
    textDropdown: {
      height: '80%',
      backgroundColor: 'blue',
    },
});