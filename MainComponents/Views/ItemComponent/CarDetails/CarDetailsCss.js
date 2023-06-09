import { StyleSheet } from 'react-native'
import React from 'react'

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
        flexDirection:'row',
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
        width:400
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
    }
})
export default CarDetailsCss