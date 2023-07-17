import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';



// lấy kích màn hình
const { width, height } = Dimensions.get('screen');

const HeaderComp = (props) => {
    return (
        <View style={HeaderCompCss.container}>
            <TouchableOpacity style={HeaderCompCss.goBack} onPress={props.onPress}>
                <Entypo name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <View style={HeaderCompCss.tittle}>
                <Text style={HeaderCompCss.text}>Forgot Password</Text>
            </View>
            <View style={HeaderCompCss.bonus}></View>
        </View>
    )
}

export default HeaderComp

const HeaderCompCss = StyleSheet.create({
    container: {
        width: width,
        height: 50,
        flexDirection: 'row',
        
    },
    goBack: {
        width: 50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tittle: {
        width: width - 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bonus: {
        width: 50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});