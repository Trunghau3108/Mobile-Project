//Tab Navigate Home, History, Support, Profile
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Home/Home'
import MainProfile from '../Profile/MainProfile'
import History from '../Historys/History'
import Support from '../Supports/Support'
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size}) => {
                    let iconName;
                    
                    if (route.name === 'Home') {
                        iconName = 'home'
                    }
                    if (route.name === 'History') {
                        iconName = 'history'
                    }
                    if (route.name === 'Support') {
                        iconName = 'question-circle'
                    }
                    if (route.name === 'Profile') {
                        iconName = 'user'
                    }
                    return <FontAwesome name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#146C94',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='History' component={History}/>
            <Tab.Screen name='Support' component={Support}/>
            <Tab.Screen name='Profile' component={MainProfile}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigate