import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FontAwesome, Entypo } from '@expo/vector-icons';
import Post from '../../ItemComponent/Posts/Post';
import DataPost from '../../../VisualData/DataPost';
import CarListFilter from '../../ItemComponent/CarListFilter/CarListFilter';

const Home = () => {
  return (
    <View style = {styles.container}>
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
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f6f6f6', 
        paddingHorizontal: 10
    },
    view1: {
        flex :1,
        backgroundColor: 'yellow',

    },
    view2: {
        flex :4,
        backgroundColor:'#f6f6f6',
        height: 800,
        
    },
    view3: {
        flex :1,
        backgroundColor:'#f6f6f6',
        height : 1000
    },
    view4: {
          flex: 1,
        //   backgroundColor: 'green',
          flexDirection:'row',
          backgroundColor: '#f6f6f6',
          borderRadius: 10,
          marginVertical:5,
        //   alignItems: 'center'
    },
    view5:{
        flex: 4,
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 10,
        backgroundColor: '#f6f6f6'
    },
    view6:{
        flex: 7,
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 10,
        height: 50,
        alignSelf: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    view7:{
        flex: 7,
        flexDirection: 'row',
        alignItems:'center',
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
    //   alignSelf: 'flex-start',
    //   backgroundColor:'red',
      flex: 8,
      justifyContent:'center',
      backgroundColor: 'white',
      flexDirection:'row',
      alignItems: 'center'
    },
    fixToText: {
        justifyContent:'center',//can thanh phan trong - can doc
        alignItems:'center',// can ngang - set theo view
    //  alignSelf: 'flex-end', // set theo thanh phan
      flex: 2,
     backgroundColor: 'white',
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

})