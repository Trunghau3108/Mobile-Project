import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'

const {width, height} = Dimensions.get("screen");

const OrderCarList = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.OrderTong}>
            {/* onPress={()=>{navigation.navigate('CarDetail')}} */}
            <View style={styles.OrderHinh}>
                <Image
                    source={{ uri: props.imgava }}
                    style={styles.orderimg}
                />
            </View>
            <View style={styles.OrderChu}>
                <View style={styles.CarBorrowName}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{props.tenxemuon}</Text>
                </View>
                <View style={styles.CarBorrowDetail}>
                    <View style={styles.CarBorrowDetail1}>
                        <Text style={{ marginRight: 25, fontSize: 14, fontWeight: 'bold' }}>Còn lại:</Text>
                        <Text style={{ fontSize: 13 }}>{props.ngaygioconlai}</Text>
                    </View>
                    <View style={styles.CarBorrowDetail2}>
                        <TouchableOpacity style={styles.ReturnCarButton} onPress={props.onPress}>
                            <Text style={{ alignSelf: 'center', color: 'white' }}>Trả xe</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default OrderCarList

const styles = StyleSheet.create({
    OrderTong: {
        height: height *20/100,
        width: width *95/100,
        alignSelf: 'center',
        borderRadius: 7,
        flexDirection: 'row',
        borderWidth: 0.7,
        borderColor: 'black',
        marginTop: 15,
    },
    orderimg: {
        height: height *18/100,
        width: width *38/100,
        borderRadius: 7,
    },
    OrderHinh: {
        width: width *40/100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    OrderChu: {
        width: width *55/100,
    },
    CarBorrowName: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    CarBorrowDetail: {
        flex: 2,
    },
    CarBorrowDetail1: {
        justifyContent: 'center',
        flex: 1,
        padding: 10,
    },
    CarBorrowDetail2: {
        flex: 1,
        height: 30,
        width: 50,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    ReturnCarButton: {
        backgroundColor: '#146C94',
        borderRadius: 7,
        width: 80,
        height: 30,
        justifyContent:'center',
        marginLeft: 10
    },

})