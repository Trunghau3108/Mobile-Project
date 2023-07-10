import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons'; 

//import view cho StackLogin
import Signin from './MainComponents/Views/LoginFeatures/Logins/Signin'
import Signup from './MainComponents/Views/LoginFeatures/Registers/Signup'
import ForgetPass from './MainComponents/Views/LoginFeatures/ForgetPass/ForgetPass'
import VerifyCode from './MainComponents/Views/LoginFeatures/VerifyCodes/VerifyCode'
import NewPassword from './MainComponents/Views/LoginFeatures/NewPasswords/NewPassword'
import Trailer from './MainComponents/Views/LoginFeatures/Trailers/Trailer'

//import view cho StackLogin
import MainProfile from './MainComponents/Views/ProfilesFetures/Profile/MainProfile'
import UpdateUserProfile from './MainComponents/Views/ProfilesFetures/UpdateUserProfile/UpdateUserProfile'
import CarBorrowList from './MainComponents/Views/ItemComponent/CarBorrowList/CarBorrowList'
import UserPrivateInfo from './MainComponents/Views/ProfilesFetures/UserPrivateInfo/UserPrivateInfo'
import Payment from './MainComponents/Views/HomesFeatures/Payment/Payment'
//import view cho TabHome
import Home from './MainComponents/Views/HomesFeatures/Home/Home'
import History from './MainComponents/Views/HomesFeatures/Historys/History'
import Support from './MainComponents/Views/HomesFeatures/Supports/Support'
import Method1 from './MainComponents/Views/HomesFeatures/Payment/Method1'
//import phụ
import Map from './MainComponents/Views/HomesFeatures/Maps/Map'

import MainScreen from './MainComponents/Views/HomesFeatures/MainScreen/MainScreen'

import FindCarFilter from './MainComponents/Views/ItemComponent/FindCarFilter/FindCarFilter'
//import for dev
import HeaderComp from './MainComponents/Views/ItemComponent/HeaderComp/HeaderComp'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const App = () => {
  return (
    <Main/>
    //<Trailer/>
    //<BottomTabComp/>
    //<HeaderComp/>
    <Map/>

  )
}


//Khu vực navigate
//cụm navigate chung cho app
const Main = () => {
  return (
    <NavigationContainer>
      <StackLogin/>
    </NavigationContainer>
  )
}
//stack cho cụm login
const StackLogin = () => {
  return (
      <Stack.Navigator
          initialRouteName='Trailer'
          screenOptions={{ headerShown: false}}
      >
          <Stack.Screen name='Trailer' component={Trailer}/>
          <Stack.Screen name='TabHome' component={TabHome}/>
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='ForgetPass' component={ForgetPass}/>
          <Stack.Screen name='NewPass' component={NewPassword}/>
          <Stack.Screen name='Verify' component={VerifyCode}/>  
          <Stack.Screen name='Map' component={Map}/>
      </Stack.Navigator>
  )
}

//stack cho cụm Profile
const StackProfile= () => {
  return (
      <Stack.Navigator initialRouteName='MainPro' screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name="MainPro" component={MainProfile} />
          <Stack.Screen name="UpdateUserPro" component={UpdateUserProfile} />
          <Stack.Screen name="BorrowList" component={CarBorrowList} />
          <Stack.Screen name="UserPrivate" component={UserPrivateInfo} />
      </Stack.Navigator>
  )
}

//BottomTab cho các component sau khi login
const TabHome = () => {
  return (
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
        <Tab.Screen name='Home' component={MainScreen} options={{headerShown: false}}/>
        <Tab.Screen name='History' component={History}/>
        <Tab.Screen name='Support' component={Support}/>
        <Tab.Screen name='Profile' component={StackProfile} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}
export default App
