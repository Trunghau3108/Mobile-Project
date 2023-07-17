import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React from 'react'
import { FontAwesome,Ionicons, FontAwesome5,  MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import CarDetailsCss from './CarDetailsCss';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const CarDetails = (props) => {
    const nagivation = useNavigation();
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
                    <Text style={{ marginTop: 30, marginBottom: -20, marginLeft: 30, fontWeight: 'bold', fontSize: 34, color:"#1979af" }}>Xe A</Text>
                    <View style={CarDetailsCss.DetailXe}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 20 }}> Chi Tiết Phương Tiện</Text>
                        <ScrollView style={CarDetailsCss.Detail1} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome name="car" size={40} color="black" />
                                <Text>Dòng xe</Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome name="gears" size={40} color="black" />
                                <Text>Hộp số</Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome5 name="gas-pump" size={40} color="black" />
                                <Text>Nhiên liệu</Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <MaterialCommunityIcons name="car-seat" size={40} color="black" />
                                <Text> 4 Chỗ </Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <MaterialIcons name="speed" size={40} color="black" />
                                <Text>Max speed</Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <MaterialCommunityIcons name="engine" size={40} color="black" />
                                <Text>Động cơ</Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome5 name="weight" size={40} color="black" />
                                <Text>Tải trọng</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={CarDetailsCss.DetailXe2}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 20 }}> Tiện Ích</Text>
                        <ScrollView style={CarDetailsCss.Detail2} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome5 name="fan" size={40} color="black" />
                                <Text>Điều hòa</Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome5 name="bluetooth-b" size={40} color="black" />
                                <Text>Bluetooth</Text>
                            </View>
                            <View style={CarDetailsCss.items}>
                                <FontAwesome5 name="map-marked" size={40} color="black" />
                                <Text>Định vị</Text>
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
            <LinearGradient
                colors={["#156791","#209ddd","#2498ff"]}
                start={{x:0, y: 0.5}}
                end={{x: 1, y: 1}}
                style={CarDetailsCss.ViewDetails2}
            >
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={{ marginRight: 180, color: 'white', fontWeight: 'bold' }}>Thuê Ngay</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>500.000đ</Text>
                </TouchableOpacity>
            </LinearGradient>

            <TouchableOpacity style={CarDetailsCss.goBack} onPress={()=>{nagivation.goBack()}}>
                <Ionicons name="arrow-back" size={35} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default CarDetails
