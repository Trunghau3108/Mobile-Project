import {  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import ChosenList from './ProfileComponent/ChosenList';
import MainProfileCss from './MainProfileCss';
import UserInfo1 from './ProfileComponent/UserInfo1';
import { useNavigation } from '@react-navigation/native';
const MainProfile = () => {
  return (
    <View style= {MainProfileCss.ViewProfile}>
        <UserInfo1 navig="UserPrivate"/>
        <View style = {MainProfileCss.ViewProfile2}>
            <ChosenList
                tenmuc="Cập nhật giấy phép lái xe"
                icon1 ="id-card"
                navi = "UpdateUserPro"
            />
            
            <ChosenList
                tenmuc="Danh sách xe đang đặt"
                icon1="th-list"
                navi = "BorrowList"
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
            />
        </View>
    </View>
  )
}

export default MainProfile
