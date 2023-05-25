import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native'
import React from 'react'
import Post from '../Components/Posts/Post'
import DataPost from '../Components/DataPost'

const Home = () => {
  return (
    <View style={styles.container}>

        <FlatList
          data={DataPost}
          renderItem={({item}) =>
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
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
});