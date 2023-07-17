import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const Trailer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/LoginFeaturesImg/background.jpg')}
        style={styles.container}
      />
      <View style={styles.title}>
        <Text style={[styles.text,{fontWeight: 'bold', fontSize: 35}]}>You need a car to go </Text>
        <Text style={styles.text}>You don't like booking car</Text>
        <Text style={styles.text}>Don't worry, find me and you rental a car to race with her</Text>
      </View>
      <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Signin')}>
        <Text style={[styles.text,{paddingTop: 0}]}> Start </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Trailer

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    title: {
        position: 'absolute',
        top: 100,
        left: 20,
        width: width *90/100,
    },
    text: {
        fontSize: 23,
        color: 'white',
        paddingTop: 10,
    },
    touch: {
      position: 'absolute',
      width: width * 60/100,
      height: 40,
      top: height *90/100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#146C94',
      alignSelf: 'center',
      borderRadius: 20,
    },
});