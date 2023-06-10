//trùng tên
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5} from '@expo/vector-icons';
import ComponentCss from './ComponentCss';
const Component = (props) => {
  return (
    <TouchableOpacity style = {ComponentCss.ViewTong}>
       {/* <View style = {ComponentCss.ViewTong}> */}
            <View style = {ComponentCss.ViewHinh}>
                        <View style = {ComponentCss.subViewHinh}>
                                <View style = {ComponentCss.SaleOff}>
                                    <FontAwesome name="tags" size={24} color="black" />
                                    <Text style = {{marginLeft: 5}}>{props.saleoff}</Text>
                                </View>
                                <View style = {ComponentCss.Distance}>
                                    <FontAwesome name="map-marker" size={24} color="black" />
                                    <Text style = {{marginLeft: 5}}>{props.distance}</Text>
                                </View>
                        </View>
                    <Image
                        source = {{uri: props.image}}
                        style = {ComponentCss.img}
                    />
                    
            </View>
            <View style = {ComponentCss.CarName}>
                <Text style = {{marginLeft: 5,fontSize:20, fontWeight: 'bold'}}> {props.carname}</Text>
            </View>
            <View style = {ComponentCss.ViewChu}>
                < View style = {ComponentCss.ViewthongTin1}>
                   
                        <View style = {ComponentCss.TienIch1}>
                            <FontAwesome name="gears" size={24} color="black" />
                            <Text> {props.autogear} </Text>
                        </View>
                        <View style = {ComponentCss.TienIch1}>
                        <FontAwesome5 name="gas-pump" size={24} color="black" />
                            <Text> {props.gaspump} </Text>
                        </View>
                        <View style = {ComponentCss.TienIch1}>
                        <FontAwesome name="wheelchair-alt" size={24} color="black" />
                            <Text> {props.seat} </Text>
                        </View>
                    
                </View>
                <View style = {ComponentCss.ViewthongTin2}>
                        <View style = {ComponentCss.TienIch2}>
                            <FontAwesome5 name="fan" size={24} color="black" />
                            <Text> {props.fan} </Text>
                        </View>
                        <View style = {ComponentCss.TienIch2}>
                            <FontAwesome name="location-arrow" size={24} color="black" />
                            <Text> {props.location} </Text>
                        </View>
                        <View style = {ComponentCss.TienIch2}>
                            <FontAwesome5 name="bluetooth-b" size={24} color="black" />
                            <Text> {props.bluetooth} </Text>
                        </View>
                </View>
                <View style = {ComponentCss.ViewGia}>
                    <Text style = {{fontSize:25, fontWeight: 'bold', color:'#146C94'}}> {props.price}</Text>
                    <Text style = {{ alignSelf: 'flex-end'}}>/ngay</Text>
                </View>
            </View>
       
    </TouchableOpacity>
  )
}

export default Component
