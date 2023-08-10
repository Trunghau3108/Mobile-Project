import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');

const NewPasswordCss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    img: {
        width: 400,
        height: 250,
        marginBottom: 20,
    },
    imgView: {
        flex: 1,
        alignItems:'center',
        justifyContent:'flex-end',
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
        paddingTop: 10,
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
        marginTop: 10,
        flexDirection:'row',
        top: 50,
        justifyContent: 'flex-end',
    },
    eye: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    
});

export default NewPasswordCss