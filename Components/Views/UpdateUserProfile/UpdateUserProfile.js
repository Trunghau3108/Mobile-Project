import {  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React from 'react'
import UpdateUserInfoCss from './UpdateUserInfoCss'
import UserInfo1 from '../Profile/ProfileComponent/UserInfo1'
import { FontAwesome } from '@expo/vector-icons';

const UpdateUserProfile = () => {
  return (
    <View style = {UpdateUserInfoCss.ViewUpdateTong}>
        <View style = {UpdateUserInfoCss.ViewUpdate1}>
            <UserInfo1/>
        </View>
        <View style = {UpdateUserInfoCss.ViewUpdate2}>
            <View style = {UpdateUserInfoCss.UpdateCMND}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#146C94',marginHorizontal:20,marginBottom:10}}>CMND/CCCD</Text>
                <View style = {UpdateUserInfoCss.UpdateCMND1}>
                    <TouchableOpacity style = {UpdateUserInfoCss.CMND1}>
                        <FontAwesome name="camera" size={30} color="#146C94" />
                    </TouchableOpacity>
                    <TouchableOpacity style ={UpdateUserInfoCss.CMND2}>
                        <FontAwesome name="camera" size={30} color="#146C94" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {UpdateUserInfoCss.UpdateDriver}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#146C94',marginHorizontal:20,marginBottom:10}}>Bằng lái xe</Text>
                <View style = {UpdateUserInfoCss.UpdateCMND1}>
                    <TouchableOpacity style = {UpdateUserInfoCss.CMND1}>
                        <FontAwesome name="camera" size={30} color="#146C94" />
                    </TouchableOpacity>
                    <TouchableOpacity style ={UpdateUserInfoCss.CMND2}>
                        <FontAwesome name="camera" size={30} color="#146C94" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default UpdateUserProfile

const styles = StyleSheet.create({})