import { ScrollView, StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import MapView, {Marker} from 'react-native-maps';
import { Entypo, AntDesign, FontAwesome  } from '@expo/vector-icons';
import CarCard from '../../ItemComponent/CarCards/CarCard'
import DataPost from '../../../VisualData/DataPost';

const Map = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.dropdownView,{flexDirection: 'row'}]}>
        <Entypo name="list" size={24} color="black" />
        <Text style={styles.textDropdown} numberOfLines={1}>Ô tô, Tất cả kiểu xe, Tất cả hộp số, Tất cả hãng xe</Text>
        <AntDesign name="down" size={20} color="black" />
      </TouchableOpacity>
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
    </View>
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
      height:60,
      justifyContent: 'center',
      alignItems:'center',
      marginHorizontal: '5%',
    },
    pageView: {
      width:'100%',
      paddingVertical: 10,
      position:'absolute',
      marginTop: 555,
    },
    textDropdown: {
      width: '80%',
      color:'gray',
      marginHorizontal: 20,
    },
});