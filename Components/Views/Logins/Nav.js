import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signin from './Signin'
import Signup from './Signup'

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='Signin' 
            // screenOptions={{ headerShown: false}}
        >
            <Stack.Screen name='Signin' component={Signin}/>
            <Stack.Screen name='Signup' component={Signup}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav