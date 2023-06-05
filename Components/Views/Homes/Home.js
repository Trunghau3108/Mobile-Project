import { StyleSheet, Text, View,ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Post from '../Posts/Post'
import DataPost from '../../VirtualData/DataPost'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const nagivation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={()=>{
          nagivation.replace('Signin');
        }}
      >
        <Text>Quay về </Text>
      </TouchableOpacity>
        <FlatList
          data={DataPost}
          horizontal={true}
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
    alignItems: 'center',
  },
});