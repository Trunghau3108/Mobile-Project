import {StyleSheet} from 'react-native'

const SignupCss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    img: {
        width: 180,
        height: 130,
    },
    imgView: {
        flex: 4,
        alignItems:'center',
        justifyContent:'center',
    },
    main: {
        flex: 7,
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
        justifyContent:'flex-end',
        height: 160,
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
    },
    text:{
        color: '#146C94',
    },
});

export default SignupCss