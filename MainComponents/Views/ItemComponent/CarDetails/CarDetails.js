import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import CarDetailsCss from './CarDetailsCss';

const CarDetails = (props) => {
    return (
        <View style={CarDetailsCss.CarDetailsTong}>
            <ScrollView style={CarDetailsCss.ViewDetails1}>
                <View style={CarDetailsCss.DetailsImage}>
                    <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg' }}
                        style={CarDetailsCss.DetailImg}
                    />
                </View>
                <View style={CarDetailsCss.DetailsChu}>
                    <Text style={{ marginTop: 30, marginBottom: -20, marginLeft: 30, fontWeight: 'bold', fontSize: 34 }}>Xe A</Text>
                    <View style={CarDetailsCss.DetailXe}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 20 }}> Chi Tiết Phương Tiện</Text>
                        <ScrollView style={CarDetailsCss.Detail1} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome name="gears" size={40} color="black" />
                                <Text> gears </Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome name="gears" size={40} color="black" />
                                <Text> gears </Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome5 name="gas-pump" size={40} color="black" />
                                <Text> Xăng </Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome name="wheelchair-alt" size={40} color="black" />
                                <Text> 4 Chỗ </Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome name="gears" size={40} color="black" />
                                <Text> gears </Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome name="gears" size={40} color="black" />
                                <Text> gears </Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={CarDetailsCss.DetailXe2}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 20 }}> Tiện Ích</Text>
                        <ScrollView style={CarDetailsCss.Detail2} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome5 name="fan" size={40} color="black" />
                                <Text> gears </Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome5 name="bluetooth-b" size={40} color="black" />
                                <Text> gears </Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={CarDetailsCss.DetailXe3}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 20, marginBottom: 10 }}> Chi Tiết Cho Thuê</Text>
                        <View style={CarDetailsCss.items2}>
                            <FontAwesome name="map-marker" size={30} color="black" />
                            <Text style={{ marginLeft: 30 }}>Thành Phố Hồ Chí Minh</Text>
                        </View>
                        <View style={CarDetailsCss.items2}>
                            <FontAwesome name="calendar" size={24} color="black" />
                            <Text style={{ marginLeft: 30 }}>7:00 13/06/2023 - 19:00 14/06/2023 </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={CarDetailsCss.ViewDetails2}>
                <Text style={{ marginRight: 180, color: 'white', fontWeight: 'bold' }}>Thuê Ngay</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>500.000đ</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CarDetails
