import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import PostCss from './PostCss';

import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Post = (props) => {
  return (
    <TouchableOpacity style={PostCss.postView}>
        <View style={PostCss.imageView}>
            <View style={PostCss.head}>
                <View style={PostCss.sale}>
                    <Text style={{color: 'white', fontSize: 13,}}>{props.giamgia}</Text>
                </View>
                <View style={PostCss.distance}>
                    <FontAwesome5 name="map-marker-alt" size={20} color="black"  />
                    <FontAwesome5 name="map-marker-alt" size={24} color="black"  />
                    <Text style={{marginLeft: 5}}>{props.khcach}</Text>
                </View>
            </View>
            
            <Image
                source={{uri: props.imguri
                }}
                style={PostCss.img}
            />
           
        </View>
        <View style={PostCss.tenxeView}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>{props.tenxe}</Text> 
        </View>
        <View style={PostCss.textView}>
            <View style={PostCss.in4Car1}>                
                <View style={PostCss.item}>
                    <FontAwesome name="gears" size={18} color="black" />
                    <Text style={{marginLeft: 5, fontSize: 10}}>{props.hopso}</Text>
                </View>
                <View style={PostCss.item}>
                    <FontAwesome5 name="gas-pump" size={18} color="black" />
                    <Text style={{marginLeft: 5, fontSize: 10}}>{props.nhienlieu}</Text>
                </View>
                <View style={PostCss.item}>
                    <MaterialCommunityIcons name="car-seat" size={18} color="black" />
                    <Text style={{marginLeft: 5,fontSize: 10}}>{props.kieuxe}</Text>
                </View>
            </View>
            <View style={PostCss.in4Car2}>
                <View style={PostCss.item}>

                    <FontAwesome5 name="fan" size={18} color="black" />
                    <Text style={{marginLeft: 5,fontSize: 10}}>{props.tienich1}</Text>
                </View>
                <View style={PostCss.item}>
                    <FontAwesome name="location-arrow" size={18} color="black" />
                    <Text style={{marginLeft: 5, fontSize: 10}}>{props.tienich2}</Text>
                </View>
                <View style={PostCss.item}>
                    <FontAwesome name="bluetooth" size={18} color="black" />
                    <Text style={{marginLeft: 5, fontSize: 10}} lineBreakMode='auto'>{props.tienich3}</Text>
                </View>
            </View>
            <View style={PostCss.priceView}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color:'#146C94'}}>{props.gia} <Text style={{textDecorationLine:'underline'}}>đ</Text></Text>
                <Text style={{alignSelf: 'flex-end', fontSize: 15}}>/ ngày</Text>
            </View>
        </View>
        <View style={PostCss.priceView}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color:'#146C94'}}>{props.gia}</Text>
            <Text style={{alignSelf: 'flex-end', fontSize: 15}}>usd/ ngày</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Post

