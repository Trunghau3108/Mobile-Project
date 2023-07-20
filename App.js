import {StyleSheet, View, Text, StatusBar } from 'react-native'
import { registerRootComponent } from 'expo';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//import view cho StackLogin
import Signin from './MainComponents/Views/LoginFeatures/Logins/Signin'
import Signup from './MainComponents/Views/LoginFeatures/Registers/Signup'
import ForgetPass from './MainComponents/Views/LoginFeatures/ForgetPass/ForgetPass'
import VerifyCode from './MainComponents/Views/LoginFeatures/VerifyCodes/VerifyCode'
import NewPassword from './MainComponents/Views/LoginFeatures/NewPasswords/NewPassword'
import Trailer from './MainComponents/Views/LoginFeatures/Trailers/Trailer'
//import view cho StackLogin
import MainProfile from "./MainComponents/Views/ProfilesFetures/Profile/MainProfile";
import UpdateUserProfile from "./MainComponents/Views/ProfilesFetures/UpdateUserProfile/UpdateUserProfile";
import CarBorrowList from "./MainComponents/Views/ItemComponent/CarBorrowList/CarBorrowList";
import UserPrivateInfo from "./MainComponents/Views/ProfilesFetures/UserPrivateInfo/UserPrivateInfo";
import Payment from "./MainComponents/Views/HomesFeatures/Payment/Payment";
//import view cho TabHome
import Home from "./MainComponents/Views/HomesFeatures/Home/Home";
import History from "./MainComponents/Views/HomesFeatures/Historys/History";
import Support from "./MainComponents/Views/HomesFeatures/Supports/Support";
import Method1 from "./MainComponents/Views/HomesFeatures/Payment/Method1";
import CarFil from "./MainComponents/Views/ItemComponent/CarListFilter/CarFil";
import CarDetails from './MainComponents/Views/ItemComponent/CarDetails/CarDetails'
//import phụ
import Map from "./MainComponents/Views/HomesFeatures/Maps/Map";
import MainScreen from "./MainComponents/Views/HomesFeatures/MainScreen/MainScreen";

import FindCarFilter from "./MainComponents/Views/ItemComponent/FindCarFilter/FindCarFilter";
//import for dev
import HeaderComp from "./MainComponents/Views/ItemComponent/HeaderComp/HeaderComp";

// import BottomTabComp from "./MainComponents/Views/ItemComponent/BottomTabComp/BottomTabComp";
import TestDATA from "./TestDATA";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//import Component
import CalendarItem from "./MainComponents/Views/ItemComponent/Calendar/CalendarItem";
import CarListFilter from "./MainComponents/Views/ItemComponent/CarListFilter/CarListFilter";
import FilterList from "./MainComponents/Views/ItemComponent/FilterList/FilterList";
import SortPrice from "./MainComponents/Views/ItemComponent/SortPrice/SortPrice";

const App = () => {
  return (
    // <Support />
    // <SortPrice />

    // <CarListFilter />

    <NavigationContainer>
      <Stack.Navigator initialRouteName="FindCarFilter">
        <Stack.Screen name="FindCarFilter" component={FindCarFilter} />
        <Stack.Screen name="FilterList" component={FilterList} />
      </Stack.Navigator>
    </NavigationContainer>
    // <CalendarItem />
    // <FilterList />

    // <Main />
    // <MainScreen />
    // <Main />
    // <UserPrivateInfo />
    // <VerifyCode/>

    // <Main/>
    // <HeaderComp />
    // <Map />
    // <BottomTabComp/>
    // <MainScreen/>
    // <TestDATA />
    // <CarFil />
  );
};

//Khu vực navigate
//cụm navigate chung cho app
const Main = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName='Trailer'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Trailer' component={Trailer} />
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='ForgetPass' component={ForgetPass} />
        <Stack.Screen name='NewPass' component={NewPassword} />
        <Stack.Screen name='Verify' component={VerifyCode} />
        <Stack.Screen name='TabHome' component={MainScreen} />
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='History' component={History} />
        <Stack.Screen name='Support' component={Support} />
        <Stack.Screen name='Map' component={Map} options={{ headerShown: true, headerTitleAlign:'center' }}/>
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name="MainPro" component={MainProfile} />
        <Stack.Screen name='CarDetail' component={CarDetails}/>
        <Stack.Screen name="UpdateUserPro" component={UpdateUserProfile} options={{ headerShown: true }}/>
        <Stack.Screen name="BorrowList" component={CarBorrowList} options={{ headerShown: true }}/>
        <Stack.Screen name="UserPrivate" component={UserPrivateInfo} options={{ headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
