import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen');

const BottomTabComp = () => {
    const [color, setColor] = useState('gray');
    const makeColor = () => {
        if (color === 'gray') {
            setColor('#146C94');
        } else {
            setColor('gray');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.bottomTab}>
                {/* Home */}
                <TouchableOpacity style={[styles.tab,{color: {color}}]} onPress={() =>makeColor()}>
                    <FontAwesome name="home" size={24} color={color} />
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>

                {/* History */}
                <TouchableOpacity style={[styles.tab,{borderLeftWidth: 1, borderColor: 'gray'}]} onPress={() =>makeColor()}>
                    <FontAwesome name="history" size={24} color={color} />
                    <Text style={styles.text}>History</Text>
                </TouchableOpacity>

                {/* Support */}
                <TouchableOpacity style={[styles.tab,{borderLeftWidth: 1, borderColor: 'gray'}]} onPress={() =>setColor('#146C94')}>
                    <FontAwesome name="question" size={24} color="#146C94" />
                    <Text style={styles.text}>Support</Text>
                </TouchableOpacity>

                {/* Profile */}
                <TouchableOpacity style={[styles.tab,{borderLeftWidth: 1, borderColor: 'gray'}]}>
                    <FontAwesome name="user" size={24} color="#146C94" />
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomTabComp

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,

    },
    bottomTab: {
        backgroundColor: '#87CEEB',
        width: width * 80 / 100,
        height: height *6/100,
        borderRadius: 20,
        flexDirection: 'row',
    },
    tab: {
        width: width *20/100,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 13,
    },
});