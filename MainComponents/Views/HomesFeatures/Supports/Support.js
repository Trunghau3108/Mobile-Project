import { StyleSheet, Text, View } from 'react-native'
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp'
import React from 'react'

const Support = () => {
  return (
    <View style={styles.container}>
      <Text>Support</Text>
      <BottomTabComp color4="#146C94"/>
    </View>
  )
}

export default Support

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});