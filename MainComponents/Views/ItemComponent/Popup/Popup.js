import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

const Popup = (props) => {
    return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={props.visible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.textView}>
                            <Ionicons name={props.icon} size={40} color="#146C94" />
                            <Text style={{ marginLeft: 20, fontSize: 15 }}> {props.text}</Text>
                        </View>
                        <View style={styles.touchView}>
                            <TouchableOpacity style={[styles.touch, { backgroundColor: '#146C94' }]}
                                onPress={props.onPress}
                            >
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Đồng ý</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
    )
}

export default Popup

const styles = StyleSheet.create({

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
        justifyContent: 'center',
        flexDirection: 'row',
        height: 110,
    },
    touchView: {
        alignItems: 'center',
        height: 50,
    },
    touch: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        height: 40,
        marginVertical: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
});