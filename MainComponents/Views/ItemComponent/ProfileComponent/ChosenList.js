import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Entypo,FontAwesome } from '@expo/vector-icons';
import MainProfileCss from '../../ProfilesFetures/Profile/MainProfileCss';
import { useNavigation } from '@react-navigation/native';

const ChosenList = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      style ={MainProfileCss.ViewMucProfile}
      onPress={() =>{
        navigation.navigate(props.navi);
      }}
    >
        <View style = {MainProfileCss.IconProfile}>
            <FontAwesome name={props.icon1} size={25} color="black" />
        </View>
            <Text style={{fontSize:15,fontWeight:'bold',width:'55%'}}>{props.tenmuc}</Text>
        <View style ={MainProfileCss.IconProfile2}>
            <Entypo name="chevron-right" size={30} color="black" />
        </View>
    </TouchableOpacity>
  )
}

export default ChosenList

