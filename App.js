import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons'; 

//import view cho StackLogin
import Signin from './Components/Views/Logins/Signin'
import Signup from './Components/Views/Registers/Signup'
import ForgetPass from './Components/Views/ForgetPass/ForgetPass'

//import view cho StackLogin
import MainProfile from './Components/Views/Profile/MainProfile'
import UpdateUserProfile from './Components/Views/Profile/UpdateUserProfile'
import CarBorrowList from './Components/Views/Profile/CarBorrowList'
import UserPrivateInfo from './Components/Views/Profile/UserPrivateInfo'

//import view cho TabHome
import Home from './Components/Views/Home/Home'
import History from './Components/Views/Historys/History'
import Support from './Components/Views/Supports/Support'

//import phụ
import Post from './Components/Views/Posts/Post'
import Map from './Components/Views/Maps/Map'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <Main/>
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
          initialRouteName='Signin'
          screenOptions={{ headerShown: false}}
      >
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='ForgetPass' component={ForgetPass}/>
          <Stack.Screen name='Home' component={TabHome}/>
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
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='History' component={History}/>
        <Tab.Screen name='Support' component={Support}/>
        <Tab.Screen name='Profile' component={StackProfile} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}
export default App
