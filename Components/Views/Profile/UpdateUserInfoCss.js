import {  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React from 'react'

const UpdateUserInfoCss = StyleSheet.create({
    ViewUpdateTong:{
        flex:1
    },
    ViewUpdate1:{
        flex:2,
        // backgroundColor:'red'
    },
    ViewUpdate2:{
        flex:8
    },
    UpdateCMND:{
        // backgroundColor:'red',
        height:100,
        marginBottom:50,
        marginTop:40
    },
    UpdateDriver:{
        height:100,
        marginTop:30
    },
    UpdateCMND1:{
        flexDirection:'row',
        // borderWidth:2,
        height:100

    },
    CMND1:{
        flex:1,
        alignItems:'center',
        // margin:30,
        borderWidth:3,
        borderColor:'#23C2C2',
        height:100,
        justifyContent:'center',
        borderStyle:'dashed',
        borderRadius:7,
        marginHorizontal:10,
        backgroundColor:'#EFEFEF',
        
    },
    CMND2:{
        flex:1,
        alignItems:'center',
        // margin:30,
        borderWidth:3,
        borderStyle:'dashed',
        borderColor:'#23C2C2',
        height:100,
        justifyContent:'center',
        borderRadius:7,
        marginHorizontal:10,
        backgroundColor:'#EFEFEF',
    },
    UpdateDriver: {
        flex:1
    },
})
export default UpdateUserInfoCss