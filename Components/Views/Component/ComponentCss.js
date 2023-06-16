import { StyleSheet } from 'react-native'
import React from 'react'

const ComponentCss = StyleSheet.create({
    CarList:{
        flex: 1,
    },
    ViewTong:{
        backgroundColor:'#ffffff',
        height: 450,
        paddingHorizontal: '5%',
        width:'95%',
        alignSelf: 'center',
        borderRadius : 7,
        marginBottom: 10,
    },
    ViewthongTin1: {
        flex:1,
        height:140
    },
    ViewthongTin2: {
        
        flex:1,
        height: 140
    },
    ViewGia:{
        flex:1
    },
    img:{
        height:200,
        width:300,
        alignSelf:'center'
        
    },
    ViewChu: {
        flex: 4,
        flexDirection: 'row',
    },
    ViewthongTin1: {
        flex: 1
    },
    ViewthongTin2: {
        flex: 1
    },
    TienIch2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 15,

    },
    TienIch1 : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,

    },
    
    ViewGia: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    ViewHinh:{
        flex: 6,
    },
    subViewHinh: {
        flexDirection: 'row',
        height: 50,
    },
    Distance: {
        // height:40,
        // width: 100,
        backgroundColor:'#f6f6f6',
        alignItems: 'center',
        flex:3,
        flexDirection: 'row',
        justifyContent:'center',
        borderRadius: 7,
    },
    SaleOff: {
        backgroundColor: '#146c94',
        // width: 100,
        flex: 7,
        marginRight: 60,
        alignItems:'center',
        flexDirection:'row',
        justifyContent: 'center',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius: 5,
    },
    CarName :{
        height: 50,
        alignItems: 'center',
        flexDirection:'row'
    }

});

export default ComponentCss