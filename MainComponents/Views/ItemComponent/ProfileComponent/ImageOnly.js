import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
const ImageOnly = () => {

    const isFocused = useIsFocused();
    const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    const retrieveUserInfo = async () => {
      try {
        const jsonString = await AsyncStorage.getItem('user');
        if (jsonString) {
          const userData = JSON.parse(jsonString);
          setUserInfo(userData);
          
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };
    
    if (isFocused) {
      retrieveUserInfo();
    }
  }, [isFocused]);
    return (
        <View style={styles.ImageOnly1}>
            <View style={[styles.space,{backgroundColor:'#136a95'}]}></View>
            <View style={styles.space}></View>
            <Image
                source={{ uri: userInfo ? userInfo.photo : 'asd' }}
                style={styles.avatar}
            />
        </View>
    )
}

export default ImageOnly

const styles = StyleSheet.create({
    ImageOnly1: {
        flex: 2,
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 500,
        position: 'absolute',
        borderColor: '#f3f3f3',
        borderWidth: 2,
        top: 20,
        left: 120 ,
    },
    space: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
})