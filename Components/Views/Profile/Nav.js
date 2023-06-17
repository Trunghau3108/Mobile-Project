// Stack Navigate Profile
import React from 'react'
import MainProfile from './MainProfile'
import UpdateUserProfile from '../UpdateUserProfile/UpdateUserProfile'
import CarBorrowList from '../CarBorrowList/CarBorrowList'
import UserPrivateInfo from '../UserPrivateInfo/UserPrivateInfo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainPro'>
        <Stack.Screen name="MainPro" component={MainProfile} />
        <Stack.Screen name="UpdateUserPro" component={UpdateUserProfile} />
        <Stack.Screen name="BorrowList" component={CarBorrowList} />
        <Stack.Screen name="UserPrivate" component={UserPrivateInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav