import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome, Ionicons, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import CarDetailsCss from './CarDetailsCss';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import url from '../../../../urlAPI';
import axios from 'axios';

const CarDetails = (props) => {
    const route = useRoute();
    const nagivation = useNavigation();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [load, setLoad] = useState(true);

    const whereCar= route.params.whereCar;
    const rentCar= route.params.rentCar;
    const returnCar= route.params.returnCar;
    const id = route.params.id;

     console.log(id);

    const getDataDetail = async (id) => {
        setLoad(true);
        let res = await axios.post(url + "/api/Products/SearchProduct",{
            "searchIdProduct": id
          });
        setData(res.data);
        console.log(data);
        setLoad(false);
    }

    const formatUnitPrice = (unitPrice) => {
        const formatter = new Intl.NumberFormat('vi-VN', {
          style: 'decimal',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
    
        return formatter.format(unitPrice).replace(/\B(?=(\d{3})+(?!\d))/g, "\n");
      }

    useEffect(() => {
        getDataDetail(id);
    }, []);

    return (
        <>
            {load ? (
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <ActivityIndicator size="large" />
                </View>
            )
                :
                (
                    <View style={CarDetailsCss.CarDetailsTong}>
                        <ScrollView style={CarDetailsCss.ViewDetails1}>
                            <View style={CarDetailsCss.DetailsImage}>
                                <Image
                                    source={{ uri: data[0].image }}
                                    style={CarDetailsCss.DetailImg}
                                />
                            </View>
                            <View style={CarDetailsCss.DetailsChu}>
                                <Text style={{ marginTop: 30, marginBottom: -20, marginLeft: 30, fontWeight: 'bold', fontSize: 34, color: "#1979af" }}>{data[0].name}</Text>
                                <View style={CarDetailsCss.DetailXe}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 20 }}> Chi Tiết Phương Tiện</Text>
                                    <ScrollView style={CarDetailsCss.Detail1} horizontal={true} showsHorizontalScrollIndicator={false}>
                                        <View style={CarDetailsCss.items}>
                                            <FontAwesome name="car" size={40} color="black" />
                                            <Text>{data[0].supplierId}</Text>
                                        </View>
                                        <View style={CarDetailsCss.items}>
                                            <FontAwesome name="gears" size={40} color="black" />
                                            <Text>
                                            {data[0].automotives.length > 0 ? data[0].automotives[0]?.engine : 'Không hỗ trợ'}
                                            </Text>
                                        </View>
                                        <View style={CarDetailsCss.items}>
                                            <FontAwesome5 name="gas-pump" size={40} color="black" />
                                            <Text>
                                            {data[0].automotives.length > 0 ? data[0].automotives[0]?.fuel : 'Không hỗ trợ'}
                                            </Text>
                                        </View>
                                        <View style={CarDetailsCss.items}>
                                            <MaterialCommunityIcons name="car-seat" size={40} color="black" />
                                            <Text>
                                            {data[0].automotives.length > 0 ? data[0].automotives[0]?.seats : 'Không hỗ trợ'}
                                            </Text>
                                        </View>
                                        <View style={CarDetailsCss.items}>
                                            <MaterialIcons name="speed" size={40} color="black" />
                                            <Text>
                                                {data[0].description}
                                            </Text>
                                        </View>
                                        <View style={CarDetailsCss.items}>
                                            <MaterialCommunityIcons name="engine" size={40} color="black" />
                                            <Text>
                                            {data[0].automotives.length > 0 ? data[0].automotives[0]?.engine : 'Không hỗ trợ'}
                                            </Text>
                                        </View>
                                        <View style={CarDetailsCss.items}>
                                            <FontAwesome5 name="weight" size={40} color="black" />
                                            <Text>
                                            {data[0].automotives.length > 0 ? (data[0].automotives[0]?.capacity ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                                            </Text>
                                        </View>
                                    </ScrollView>
                                </View>
                                <View style={CarDetailsCss.DetailXe2}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 20 }}> Tiện Ích</Text>
                                    <ScrollView style={CarDetailsCss.Detail2} horizontal={true} showsHorizontalScrollIndicator={false}>
                                        <View style={CarDetailsCss.items}>
                                            <FontAwesome5 name="fan" size={40} color="black" />
                                            <Text>
                                            {data[0].automotives.length > 0 ? (data[0].automotives[0]?.ac ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                                            </Text>
                                        </View>
                                        <View style={CarDetailsCss.items}>
                                            <FontAwesome5 name="bluetooth-b" size={40} color="black" />
                                            <Text>
                                            {data[0].automotives.length > 0 ? (data[0].automotives[0]?.bluetooth ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}
                                            </Text>
                                        </View>
                                        <View style={CarDetailsCss.items}>
                                            <FontAwesome5 name="map-marked" size={40} color="black" />
                                            <Text>{data[0].automotives.length > 0 ? (data[0].automotives[0]?.gps ? 'Có hỗ trợ' : 'Không hỗ trợ') : 'Không hỗ trợ'}</Text>
                                        </View>
                                    </ScrollView>
                                </View>
                                <View style={CarDetailsCss.DetailXe3}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 20, marginBottom: 10 }}> Chi Tiết Cho Thuê</Text>
                                    <View style={CarDetailsCss.items2}>
                                        <FontAwesome name="map-marker" size={30} color="black" />
                                        <Text style={{ marginLeft: 30 }}>{whereCar}</Text>
                                    </View>
                                    <View style={CarDetailsCss.items2}>
                                        <FontAwesome name="calendar" size={24} color="black" />
                                        <Text style={{ marginLeft: 30 }}>{rentCar} - {returnCar} </Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        <LinearGradient
                            colors={["#156791", "#209ddd", "#2498ff"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 1 }}
                            style={CarDetailsCss.ViewDetails2}
                        >
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { nagivation.navigate('Payment',{
                                whereCar: route.params.whereCar ,
                                rentCar: route.params.rentCar ,
                                returnCar: route.params.returnCar ,
                                coupon: data[0].discount,
                                id: route.params.id ,
                            });}}>
                                <Text style={{ marginRight: 180, color: 'white', fontWeight: 'bold' }}>Thuê Ngay</Text>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{formatUnitPrice(data[0].unitPrice)}</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <TouchableOpacity style={CarDetailsCss.goBack} onPress={() => { nagivation.goBack() }}>
                            <Ionicons name="arrow-back" size={35} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            }
        </>
    )
}

export default CarDetails
