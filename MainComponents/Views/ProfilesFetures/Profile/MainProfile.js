import { View } from 'react-native'
import React from 'react'
import ChosenList from '../../ItemComponent/ProfileComponent/ChosenList';
import MainProfileCss from './MainProfileCss';
import UserInfo1 from '../../ItemComponent/ProfileComponent/UserInfo1';
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';
import { useNavigation } from '@react-navigation/native';

const MainProfile = () => {
    const navigation = useNavigation();
    return (
        <View style={MainProfileCss.ViewProfile}>
            <UserInfo1 navig="UserPrivate" />
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
                    onPress={()=>{navigation.navigate("Support")}}
                />
                <ChosenList
                    tenmuc="Đăng xuất"
                    icon1="sign-out"
                    onPress={()=>{navigation.navigate("Signin")}}
                />
            </View>
            <BottomTabComp color5="#146C94"/>
            
        </View>
    )
}

export default MainProfile
