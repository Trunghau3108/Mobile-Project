import { FlatList, StyleSheet, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

//component import
import Post from '../../ItemComponent/Posts/Post';
import DataPost from '../../../VisualData/DataPost';
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';
import axios from 'axios';
import url from '../../../../urlAPI';

const { width, height } = Dimensions.get('screen');

const History = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.post(url + '/api/Oders/GetListOrder');
    setData(res.data)
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Post
            giamgia={item.giamgia}
            khcach={item.khcach}
            tenxe={item.tenxe}
            hopso={item.hopso}
            nhienlieu={item.nhienlieu}
            kieuxe={item.kieuxe}
            tienich1={item.tienich1}
            tienich2={item.tienich2}
            tienich3={item.tienich3}
            gia={item.gia}
            imguri={item.uri}
          />
        }
      />
      <BottomTabComp color2="#146C94"/>
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