import { ScrollView, StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import CarCard from '../../ItemComponent/CarCards/CarCard'
import DataPost from '../../../VisualData/DataPost';
import HeaderComp from '../../ItemComponent/HeaderComp/HeaderComp';

const { width, height } = Dimensions.get('screen');

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.pageView}>
        <FlatList
          horizontal={true}
          data={DataPost}
          renderItem={({ item }) =>
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
    width: width,
    height: height,
  },
  map: {
    width: width,
    height: height,
  },
  pageView: {
    width: width,
    height: height * 40 / 100,
    position: 'absolute',
    bottom: height *5/100, 
  },
  textDropdown: {
    width: '80%',
    color: 'gray',
    marginHorizontal: 20,
  },
});