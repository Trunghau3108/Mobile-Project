import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const VerifyCodeCss =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    img: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    imgView: {
        flex: 1,
        alignItems:'center',
        justifyContent:"flex-end",
    },
    main: {
        flex: 1,
    },
    textView: {
        alignItems:'center',
        marginBottom:20,
    },
    inputView: {
        width: '80%',
        height:50,
        alignSelf: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 5,
        borderColor: '#146C94',
        borderWidth: 1,
        backgroundColor:'#EEFAFF',
    },
    input: {
        marginLeft: 10,
    },
    touchView: {
        alignItems:'center',
        paddingTop: 20,
    },
    dangki: {
        backgroundColor:'#146C94',
        width:'80%',
        height:40,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    dangnhapview: {
        flexDirection:'row',
        top: 100,
        justifyContent: 'flex-end',
    },
    text:{
        color: '#146C94',
    },
});

export default VerifyCodeCss