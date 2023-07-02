import { StyleSheet } from 'react-native'
import React from 'react'

const PostCss = StyleSheet.create({
    container: {
        width: "100%",
        height: 400,
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    post: {
        width: '96%',
        height: 360,
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    tag: {
        height: 40,
        padding: 10,
        position:'absolute',
        bottom: 330,
        left: 0,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor:'#146C94',
    },
    km: {
        backgroundColor:'white',
        height: 40,
        padding: 10,
        marginTop: 10,
        marginRight: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ECECEC',

    },
    img: {
        width: "96%",
        height: 140,
        marginTop: 5,
    },
    infor: {
        width:"96%",
        height: 150,

    },
    name: {
        width :"100%",
        height: 40,
        justifyContent:'center',

    },
    define: {
        width: '100%',
        height: 110,
        flexDirection: 'row',
    },
    define1: {
        width: '33%',
        height: 110,
        justifyContent: 'space-around',
    },
    define2: {
        width: '34%',
        height: 110,
        justifyContent:'flex-end',
    },
    item: {
        flexDirection: 'row',
    },
});
export default PostCss
