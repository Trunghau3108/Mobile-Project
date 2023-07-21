import { StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const {width, height}= Dimensions.get("screen");

const CarDetailsCss = StyleSheet.create({
    CarDetailsTong:{
        flex:1,
    },
    ViewDetails1:{
        flex:9,
        
    },
    ViewDetails2:{
        flex:1,
        backgroundColor:'#146C94',
        position:'absolute',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        bottom:30,
        height:50,
        width:'90%',
        borderRadius:5
    },
    DetailsImage:{
        flex:1,
        height:200,
        position:'relative',
    },
    DetailImg:{
        height:200,
        width: width,
    },
    DetailsChu:{
        flex:1,
        backgroundColor:'#EDEDED',
        height:700,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    DetailXe:{
        // flex:1,
        height:170,
        marginTop:30,
        borderBottomWidth:1,
        borderColor:'#D8D8D8'
    },
    DetailXe2:{
        height:170,
        borderBottomWidth:1,
        borderColor:'#D8D8D8'
    },
    Detail1:{
        // flex:1,
        height:70,
        alignSelf: 'center',
        flexDirection:'row'
    },
    Detail2:{
        // flex:1,
        height:70,
        flexDirection:'row'
    },
    items:{
        marginTop:30,marginLeft:30,alignItems:'center'
    },
    items2:{
        flexDirection:'row',marginTop:10,marginLeft:30
    },
    goBack: {
        position: 'absolute',
        top: 20,
        left: 15,
    },
})
export default CarDetailsCss