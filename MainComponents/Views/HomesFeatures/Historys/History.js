import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//component import
import Post from '../../ItemComponent/Posts/Post'
import DataPost from '../../../VisualData/DataPost'
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp'

const History = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DataPost}
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