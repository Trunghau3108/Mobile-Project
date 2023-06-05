import { Dimensions, StyleSheet } from 'react-native'

const SigninCss = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    img: {
        position:'absolute',
        width: Dimensions.get('screen').height*0.51,
        height: Dimensions.get('screen').height*0.4,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        bottom: Dimensions.get('screen').height*0.6,
        left: -25,
    },
    main: {
        top: 150,
        alignItems:'center',
    },
    inputview: {
        width: '80%',
        height:50,
        marginTop: 10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#146C94',
        borderWidth: 1,
        backgroundColor:'#EEFAFF',
    },
    input: {
        marginLeft: 10,
    },
    text:{
        color: '#146C94',
    },
    link: {
        width:'80%',
        top: 10,
        flexDirection: 'row',
    },
    dangnhap: {
        top: 50,
        backgroundColor:'#146C94',
        width:'80%',
        height:40,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    dangkiview: {
        top: 60,
        flexDirection:'row',
    },
});

export default SigninCss