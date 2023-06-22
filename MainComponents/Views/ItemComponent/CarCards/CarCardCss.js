import {StyleSheet} from 'react-native'

const CarCardCss = StyleSheet.create({
    cardView: {
        width: 300,
        height: 255,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent:'center',
        paddingHorizontal: 10,
    },
    touch: {
        width: 280,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#146C94',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '90%',
        height: 100,
    },
    textView: {
        height: 100,
        paddingTop: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#146C94',
    },

});

export default CarCardCss;