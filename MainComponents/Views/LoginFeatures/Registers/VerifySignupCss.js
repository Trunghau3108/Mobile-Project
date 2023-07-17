import { StyleSheet } from 'react-native'

const VerifySignupCss =StyleSheet.create ({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '80%',
        height: 200,
        borderRadius: 20,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textView: {
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        height: 110,
    },
    touchView: {
        alignItems: 'center',
        height: 50,
    },
    touch: {
        alignItems:'center',
        justifyContent:'center',
        width: '48%',
        height: 40,
        marginVertical: 10,
        borderRadius: 10,
        alignSelf:'center',
    },
});

export default VerifySignupCss