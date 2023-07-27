import { View } from 'react-native'
import React from 'react'
import ChosenList from '../../ItemComponent/ProfileComponent/ChosenList';
import MainProfileCss from './MainProfileCss';
import UserInfo1 from '../../ItemComponent/ProfileComponent/UserInfo1';
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainProfile = ({route}) => {
    const clearUserData = async () => {
        try {
         await AsyncStorage.removeItem('user');
          // Remove other relevant keys related to the user here (if any)
        } catch (e) {
          console.error('Error removing user data from AsyncStorage:', e);
        }
      };
      
      const removeValue =  () => {
        try {
           clearUserData();
          navigation.navigate('Signin');
        } catch (e) {
          console.error('Error during logout:', e);
        }
      };

      const navigation = useNavigation();

      const {userInfo} = route.params;
      console.log(userInfo)
    return (
        <View style={MainProfileCss.ViewProfile}>
            <UserInfo1 navig="UserPrivate"/>
            <View style={MainProfileCss.ViewProfile2}>
                <ChosenList
                    tenmuc="Cập nhật giấy phép lái xe"
                    icon1="id-card"
                    onPress={()=>{navigation.navigate("UpdateUserPro")}}
                />

                <ChosenList
                    tenmuc="Danh sách xe đang đặt"
                    icon1="th-list"
                    onPress={()=>{navigation.navigate("BorrowList")}}
                />
                <ChosenList
                    tenmuc="Cài đặt"
                    icon1="gear"
                />
                <ChosenList
                    tenmuc="Điều khoản sử dụng"
                    icon1="question-circle-o"
                />
                <ChosenList
                    tenmuc="Đăng xuất"
                    icon1="sign-out"
                    onPress={()=>{removeValue()}}
                />
            </View>
            <BottomTabComp color5="#146C94"/>
            
        </View>
    )
}

export default MainProfile
