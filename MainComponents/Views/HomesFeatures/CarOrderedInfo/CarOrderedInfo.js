//View
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
const CarOrderedInfo = () => {
    const [name, address, paymethod, coupon, onChangeText] = React.useState('');
    const [phone, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.OrderInfoTong}>
                <View style={styles.Orderinfotong2}>
                    <View style={styles.OrderImage}>
                        <Text style={{ justifyContent: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 20 }}>Xe A</Text>
                        <Image
                            source={{ uri: 'https://www.lafactory.com/images/detailed/137/il_fullxfull.847704656_4wn1.jpg' }}
                            style={{
                                height: 100,
                                width: 200,
                                alignSelf: 'center',
                            }}
                        />
                    </View>
                    <View style={styles.OrderUser}>
                        <View style={styles.OrdUserName}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#146C94' }}>Người thuê xe</Text>
                            <View style={styles.Name1}>
                                <AntDesign name="user" size={24} color="#146C94" style={{ marginLeft: 10 }} />
                                <TextInput
                                    style={styles.input1}
                                    onChangeText={onChangeText}
                                    value={name}
                                    placeholder="Tên"
                                />
                            </View>
                        </View>
                        <View style={styles.OrdUserPhone}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#146C94' }}>Số điện thoại</Text>
                            <View style={styles.Phone1}>
                                <AntDesign name="phone" size={24} color="#146C94" style={{ marginLeft: 10, transform: [{ rotateY: '180deg' }] }} />
                                <TextInput
                                    style={styles.input2}
                                    onChangeText={onChangeNumber}
                                    value={phone}
                                    keyboardType='numeric'
                                    placeholder="Số điện thoại"
                                />
                            </View>
                        </View>
                        <View style={styles.OrdUserAddress}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#146C94' }}>Địa chỉ trả xe</Text>
                            <View style={styles.Address1}>
                                <AntDesign name="home" size={24} color="#146C94" style={{ marginLeft: 10 }} />
                                <TextInput
                                    style={styles.input3}
                                    onChangeText={onChangeText}
                                    value={address}
                                    placeholder="Địa chỉ trả xe"
                                />
                            </View>
                        </View>
                        <View style={styles.OrdUserPayMethod}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#146C94' }}>Hình thức thanh toán</Text>
                            <View style={styles.PayMethod1}>
                                <FontAwesome5 name="money-bill-wave" size={20} color="#146C94" style={{ marginLeft: 10 }} />
                                <TextInput
                                    style={styles.input4}
                                    onChangeText={onChangeText}
                                    value={paymethod}
                                    placeholder="Hình thức thanh toán"
                                />
                            </View>
                        </View>
                        <View style={styles.OrdUserCoupon}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#146C94' }}>Mã giảm giá</Text>
                            <View style={styles.Coupon1}>
                                <AntDesign name="tags" size={24} color="#146C94" style={{ marginLeft: 10 }} />
                                <TextInput
                                    style={styles.input5}
                                    onChangeText={onChangeText}
                                    value={coupon}
                                    placeholder="Mã giảm giá"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.OrderPrice}>
                        <TouchableOpacity style={styles.ButtonTraXe}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#fff' }}>Trả xe</Text>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>500.000</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CarOrderedInfo

const styles = StyleSheet.create({
    OrderInfoTong: {
        flex: 1,
        padding: '2%',
        // backgroundColor:'red'
    },
    Orderinfotong2: {
        borderWidth: 0.75,
        borderRadius: 7
    },
    OrderImage: {
        // borderWidth:1,
        padding: 10,
        margin: 10
    },
    OrderPrice: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 15,
        // backgroundColor:'green'
    },
    OrdUserName: {
        padding: 10,
        margin: 10,
        marginBottom: -10,
    },
    OrdUserPhone: {
        padding: 10,
        margin: 10,
        marginBottom: -10,
    },
    OrdUserAddress: {
        padding: 10,
        margin: 10,
        marginBottom: -10,
    },
    OrdUserPayMethod: {
        padding: 10,
        margin: 10,
        marginBottom: -10,
    },
    OrdUserCoupon: {
        padding: 10,
        margin: 10,
        marginBottom: -10,
    },
    Name1: {
        height: 50,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#EEFAFF'
    },
    Phone1: {
        height: 50,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#EEFAFF'
    },
    Address1: {
        height: 50,
        borderWidth: 1,

        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#EEFAFF'
    },
    PayMethod1: {
        height: 50,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#EEFAFF'
    },
    Coupon1: {
        height: 50,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#EEFAFF'
    },
    input1: {
        marginLeft: 10,
        color: '#146C94',
    },
    input2: {
        marginLeft: 10,
        color: '#146C94',
    },
    input3: {
        marginLeft: 10,
        color: '#146C94',
    },
    input4: {
        marginLeft: 10,
        color: '#146C94',
    },
    input5: {
        marginLeft: 10,
        color: '#146C94',
    },
    ButtonTraXe: {
        backgroundColor: '#146C94',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 50,
        borderRadius: 7
    },
})