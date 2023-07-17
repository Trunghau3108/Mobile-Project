import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'


const OrderCarList = (props) => {
    return (
        <TouchableOpacity style={styles.OrderTong}>
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
                        <Text style={{ fontSize: 14 }}>{props.ngaygiomuon}</Text>
                    </View>
                    <View style={styles.CarBorrowDetail2}>
                        <TouchableOpacity style={styles.ReturnCarButton}>
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
        height: 140,
        width: '93%',
        alignSelf: 'center',
        borderRadius: 7,
        flexDirection: 'row',
        borderWidth: 0.7,
        borderColor: 'black',
        marginTop: 15
    },
    orderimg: {
        height: 97,
        width: 151,
    },
    OrderHinh: {
        flex: 4,
        alignItems: 'center',
    },
    OrderChu: {
        flex: 6,
    },
    CarBorrowName: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    CarBorrowDetail: {
        flex: 1,
        flexDirection: 'row',
    },
    CarBorrowDetail1: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginBottom: 10

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
        borderWidth: 1,
        width: 90,
        marginLeft: 10
    },

})