import { StyleSheet } from 'react-native'
import React from 'react'

const MainProfileCss = StyleSheet.create({
    ViewProfile:{
        // flexDirection: 'row',
        // backgroundColor:'',
        height:250,
        // borderBottomWidth:1,
        flex:1,
        // borderColor:'red'
    },
    ViewProfile1:{
        flex:2,
        flexDirection:'row',
        //backgroundColor:'red'
        borderBottomWidth:1,
        borderColor:'#ECECEC'
    },
    ViewProfile2:{
        flex:8,
        // backgroundColor:'red'
    },
    ViewHinhProfile: {
        flex:1,
        // borderColor:'green',
        // borderWidth:3
        
    },
    ViewChuProfile: {
        flex:1,
        alignItems:'flex-start'
    },
    img: {
        height:100,
        width:100,
        alignSelf:'center',
        justifyContent:'center',
        marginVertical:30,
        borderRadius:500,
    },
    ViewChuProfile1:{
        // backgroundColor:'blue',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    ViewChuProfile2:{
        // backgroundColor:'green',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    ViewChuProfileButton:{
        borderRadius:10,
        // flex:1,
        backgroundColor:'#146C94',
        height: 39,
        width:140,
        justifyContent:'center'
    },
    // ViewMucProfile:{
    //     flexDirection:'row',
    //     borderWidth:3,
    //     height:90,
    //     alignItems:'center',
    // },
    // IconProfile:{
    //     marginHorizontal:30,
    //     borderWidth:2,
    //     height:50,
    //     width:50,
    //     justifyContent:'center',
    //     alignItems:'center'
    // },  
    ViewMucProfile:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#ECECEC',
        height:90,
        alignItems:'center',
        marginBottom:10,
        // backgroundColor:'red'
    },
    IconProfile:{
        marginHorizontal:30,
        borderWidth:2,
        height:55,
        width:55,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        backgroundColor: '#ECECEC',

    }, 
    IconProfile2:{
        marginHorizontal:330,
        position:'absolute'
    }
})

export default MainProfileCss