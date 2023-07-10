import {  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5,Fontisto,Octicons,Entypo, AntDesign } from '@expo/vector-icons';

const FindCarFilter = () => {
    const [isCarSelected, setCarSelected] = useState(false);
    const [isMotorSelected, setMotorSelected] = useState(false);
    const handleCarPress = () => {
        setCarSelected(!isCarSelected);
        setMotorSelected(false);
      };
    const handleMotorPress = () => {
        setMotorSelected(!isMotorSelected);
        setCarSelected(false);
      };
    
  return (
    <View style = {styles.FindCarTong}>
        <View style = {styles.ChonXe}>
            <TouchableOpacity style = {[styles.ChonOto, 
            { backgroundColor: isCarSelected ? '#146C94' : '#ECECEC' }
            ]} onPress={handleCarPress}>
                <FontAwesome5 name="car" size={24} color={isCarSelected ? 'white':'black'}  style={{ marginLeft: 10 }}/>
                <Text style = {{marginLeft:10,color: isCarSelected ? 'white': 'black'}}>Ô tô</Text>
                {isCarSelected ?(
                    <AntDesign name="check" size={24} style ={{marginLeft:50}} color={isCarSelected ? 'white':'black'} />
                ): null}
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.ChonMoTo, 
            { backgroundColor: isMotorSelected ? '#146C94' : '#ECECEC' }
            ]} onPress={handleMotorPress}>
                <Fontisto name="motorcycle" size={24} color={isMotorSelected ? 'white':'black'} style={{ marginLeft: 10 }}/>
                <Text style = {{marginLeft:10,color: isMotorSelected ? 'white': 'black'}}>Xe máy</Text>
                {isMotorSelected ?(
                    <AntDesign name="check" size={24} style ={{marginLeft:50}} color={isMotorSelected ? 'white':'black'} />
                ): null}
            </TouchableOpacity>
        </View>
        <TouchableOpacity style = {styles.ChonDiaDiem}>
            <Octicons name="location" size={24} color="black" style={{ marginLeft: 10 }} />
            <Text style = {{ marginLeft: 10 }}>
                Hà Nội
            </Text>
            <View style= {{ marginLeft:220}}>
                <Entypo name="chevron-down" size={24} color="black" />
            </View>
        </TouchableOpacity>
        <View style = {styles.ChonTime}>
            <Text>Thang Lam Xong thi import Calendar vao day</Text>
        </View>
        <TouchableOpacity style = {styles.FindCarButton}>
            <Text style ={{fontSize:17, fontWeight:'bold',color:'white'}} >
            Tìm xe ngay
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default FindCarFilter

const styles = StyleSheet.create({
    FindCarTong:{
        marginTop:20,
        height:270,
        padding:20

    },  
    ChonXe:{
        height:60,
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    ChonDiaDiem:{
        height:60,
        backgroundColor:'#ECECEC',
        width:'95%',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    ChonTime:{
        height:60,
        backgroundColor:'#ECECEC',
        marginTop:10,
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    FindCarButton:{
        height:60,
        backgroundColor:'yellow',
        marginTop:10,
        width:'95%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#146C94'
    },
    ChonOto:{
        backgroundColor:'#ECECEC',
        width:'46%',
        marginRight:10,
        height:60,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
    },
    ChonMoTo:{
        backgroundColor:'#ECECEC',
        width:'46%',
        height:60,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
    },

})