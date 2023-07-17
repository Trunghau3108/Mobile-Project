import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarListFilter from '../../ItemComponent/CarListFilter/CarListFilter';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Post from '../../ItemComponent/Posts/Post';
import CarListFilter from '../../ItemComponent/CarListFilter/CarListFilter';
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';

//thử data
import urlAPI from '../../../../urlAPI';
import axios from 'axios';

const Home = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <View style={styles.container}>
      {/* <View style = {styles.view2}>
            <View style = {styles.view4}>
                <View style={styles.title}>
                    <View style ={{flexDirection: 'row', flex:2}}>
                        <Entypo name="location" size={24} color="black" />
                    </View>
                    <View style = {styles.locationtext}>
                        <Text >
                        Thanh pho Ho Chi Minh
                        </Text>  
                        <Text>
                            14:30 24/05/2023
                        </Text>
                    </View>
                </View>          
                <View style={styles.fixToText}>
                    <TouchableOpacity onPress={() => Alert.alert('chuc mung ban da bi lua')}>
                        <Text>
                            thay doi
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> 
            <View style = {styles.view4}>
                <View style={styles.view7}>
                    <View style = {{flex:2}}>
                        <FontAwesome name="list" size={24} color="black" />
                        </View>  
                            <View style = {{flex:8}}>
                                <Text style = {{margin:10, fontSize:17}}> Oto, Kieu Xe, Hop So</Text>
                            </View> 
                    </View> 
                <View style = {styles.button5}>
                        <TouchableOpacity onPress={() => Alert.alert('chuc mung ban da bi lua')}>
                            <FontAwesome name="chevron-down" size={24} color="black" />
                        </TouchableOpacity>                       
                </View>
            </View>
            <View style = {styles.view4}>
                <View style = {styles.view6}>
                        <View style = {{flex:1}}>
                        <FontAwesome name="list" size={24} color="black" />
                        </View>  
                        <View style = {{flex:8}}>
                            <Text style = {{margin:10, fontSize:17}} numberOfLines={1}> Gia tu thap den cao</Text>
                        </View>   
                        <View style = {{flex:1}}>
                            <FontAwesome name="chevron-down" size={24} color="black" />
                        </View>  
                </View>
                <View style = {styles.view5}>
                    <View style={styles.button3}>
                        <TouchableOpacity onPress={() => Alert.alert('chuc mung ban da bi lua')}>
                            <Text style = {{color: '#fff', fontWeight:'bold'}}> Lọc</Text>
                        </TouchableOpacity>
                    </View>
                </View>      
                
            </View>
        </View> */}

{/* //         <View>
//             <CarListFilter/>
//         </View> */}

        <CarListFilter/>

        <View style = {styles.scrollview1}>
            <View style = {styles.view3}>    
                <FlatList
                    data = {DataPost}
                    renderItem={({item}) =>
                    <Post
                        giamgia={item.giamgia}
                        khcach={item.khcach}
                        tenxe={item.tenxe}
                        hopso={item.hopso}
                        nhienlieu={item.nhienlieu}
                        kieuxe={item.kieuxe}
                        tienich1={item.tienich1}
                        tienich2={item.tienich2}
                        tienich3={item.tienich3}
                        gia={item.gia}
                        imguri={item.uri}
                        map="Map"
                    />
                    }
                />
            </View>
        </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingHorizontal: 10
    },
    scrollview1: {
        flex: 8,
    },
    view3: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        height: 1000
    },
    dropdown1: {
        flex:1
    },
    button3: {
        flex:1,
        // borderWidth:1,
        borderRadius:3,
        height: 50,
        width:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#146C94',
    },
    button4: {
        flex:1,
        // borderWidth:1,
        borderRadius:3,
        height: 50,
        width:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green'

    },
    button5: {
        flex:1,
        // borderWidth:1,
        borderRadius:3,
        height: 70,
        width:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginTop: 6
    },
    locationtext: {
        flex: 8
    },
