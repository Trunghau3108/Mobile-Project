import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import PostCss from './PostCss';

const Post = (props) => {
    const nagivation = useNavigation();
    const promotion = props.giamgia * 100;
  return (
    <TouchableOpacity style={PostCss.container} onPress={props.onPress}>
        <View style={PostCss.post}>
            <TouchableOpacity style={PostCss.km} onPress={() => {nagivation.navigate('Map')}}>
                <FontAwesome5 name="map-marker-alt" size={20} color="black"  />
                <Text style={{marginLeft: 10}}> {props.khcach} km</Text>
            </TouchableOpacity>

            <Image
                 source={{uri: props.imguri
                 }}
                 style={PostCss.img}
            />

            <View style={PostCss.infor}>
                <View style={PostCss.name}><Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:15}}>{props.tenxe}</Text></View>
                
                <View style={PostCss.define}>
                    <View style={PostCss.define1}>
                        <View style={PostCss.item}>
                            <FontAwesome name="gears" size={18} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 13}}>{props.hopso}</Text>
                        </View>
                        <View style={PostCss.item}>
                            <FontAwesome5 name="gas-pump" size={18} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 13, width: 70}} numberOfLines={1}>{props.nhienlieu}</Text>
                        </View>
                        <View style={PostCss.item}>
                            <MaterialCommunityIcons name="car-seat" size={18} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 13, width: 70}} numberOfLines={1}>{props.kieuxe} chỗ </Text>
                        </View>
                    </View>
                    <View style={[PostCss.define1,{borderRightWidth: 1}]}>
                        <View style={PostCss.item}>
                            <FontAwesome5 name="fan" size={18} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 13, width: 70}} numberOfLines={1}>{props.tienich1}</Text>
                        </View>
                        <View style={PostCss.item}>
                            <FontAwesome name="location-arrow" size={18} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 13, width: 70}} numberOfLines={1}>{props.tienich2}</Text>
                        </View>
                        <View style={PostCss.item}>
                            <FontAwesome name="bluetooth" size={18} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 13, width: 70}} numberOfLines={1}>{props.tienich3}</Text>
                        </View>
                    </View>
                    <View style={PostCss.define2}>
                        <Text style={{fontSize: 25,paddingHorizontal: 4, fontWeight: 'bold', color:'#146C94'}}>{props.gia}</Text>
                        <Text style={{fontSize: 15, alignSelf: "flex-end"}}>đ / ngày</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={PostCss.tag} >
            <Text style={{color: 'white'}}>giảm giá {promotion} %</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Post

