import { StatusBar } from 'expo-status-bar';
import { Stylesheet, Text, View } from 'react-native';
import Home from './Components/Views/Home/Home';
import Component from './Components/Views/Component/Component';
import MainProfile from './Components/Views/Profile/MainProfile';
import ChosenList from './Components/Views/Profile/ProfileComponent/ChosenList';
import UpdateUserProfile from './Components/Views/Profile/UpdateUserProfile';
import CarBorrowList from './Components/Views/Profile/CarBorrowList';
import ImageOnly from './Components/Views/Profile/ProfileComponent/ImageOnly';
import OrderCarList from './Components/Views/Profile/ProfileComponent/OrderCarList';
import UserPrivateInfo from './Components/Views/Profile/UserPrivateInfo';
import Nav from './Components/Views/Nav';



export default function App() {
  return (
    // <Home></Home>
    // <ForgotPassword/>
    // <DottedBox/>
    // <MainProfile/>
    // <ChosenList/>
    // <UpdateUserProfile/>
    // <CarBorrowList/>
    // <ImageOnly/>
    // <OrderCarList/>
    // <UserPrivateInfo/>
    <Nav/>
  );

}


