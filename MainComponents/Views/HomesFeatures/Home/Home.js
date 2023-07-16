import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FontAwesome, Entypo } from '@expo/vector-icons';
import Post from '../../ItemComponent/Posts/Post';
import DataPost from '../../../VisualData/DataPost';
import CarListFilter from '../../ItemComponent/CarListFilter/CarListFilter';
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';

//thử data
import urlAPI from '../../../../urlAPI';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    //thuc hien lay data
    // chạy link backend trước, sau đó lấy link localhost backend để chạy public server ngrok
    const getDataAPI = async () => {
        let res = await axios.post(urlAPI + '/api/categories/GetListCategory');
        setData(res.data);
        console.log(urlAPI);
        console.log(res.data);
    }
    useEffect(() => { getDataAPI() }, []);

    return (
        <View style={styles.container}>
            <View>
                <CarListFilter />
            </View>
            <View style={styles.scrollview1}>
                <View style={styles.view3}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <Post
                                giamgia={item.discount}
                                tenxe={item.name}
                                gia={item.unitPrice}
                                map="Map"
                            />
                        }
                    />
                </View>
            </View>
            <BottomTabComp color3="#146C94" />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingHorizontal: 10
    },
    view1: {
        flex: 1,
        backgroundColor: 'yellow',

    },
    view2: {
        flex: 4,
        backgroundColor: '#f6f6f6',
        height: 800,

    },
    view3: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        height: 1000
    },
    view4: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        marginVertical: 5,
    },
    view5: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f6f6f6'
    },
    view6: {
        flex: 7,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        height: 50,
        alignSelf: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    view7: {
        flex: 7,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
        height: 70,
        alignSelf: 'center',
        paddingHorizontal: 7,
        backgroundColor: 'white',
    },
    scrollview1: {
        flex: 8,
    },
    title: {
        textAlign: 'center',
        paddingLeft: 10,
        flex: 8,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    fixToText: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        backgroundColor: 'white',
    },
    dropdown1: {
        flex: 1
    },
    button3: {
        flex: 1,
        borderRadius: 3,
        height: 50,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#146C94',
    },
    button4: {
        flex: 1,
        borderRadius: 3,
        height: 50,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'

    },
    button5: {
        flex: 1,
        borderRadius: 3,
        height: 70,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 6
    },
    locationtext: {
        flex: 8
    },

})