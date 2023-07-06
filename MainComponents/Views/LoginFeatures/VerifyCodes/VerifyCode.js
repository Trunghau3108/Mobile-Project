import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import VerifyCodeCss from './VerifyCodeCss'
import HeaderComp from '../../ItemComponent/HeaderComp/HeaderComp';

const VerifyCode = () => {
  const nagivation = useNavigation();
  return (
    <SafeAreaView style={VerifyCodeCss.container}>
      <View style={VerifyCodeCss.imgView}>
        <Image
          source={require('../../../../assets/LoginFeaturesImg/VerifiedCode.png')}
          style={VerifyCodeCss.img}
        />
      </View>
      <View style={VerifyCodeCss.main}>
        <View style={VerifyCodeCss.textView}>
          <Text style={{fontSize: 40, fontWeight:'bold', color:'#146C94'}}>Nhập mã xác nhận</Text>
          <Text style={{color:'gray'}}>Mã xác nhận đã được gửi qua số điện thoại người dùng</Text>
        </View>
        <View style={VerifyCodeCss.inputView}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập mã xác nhận...'
            style={VerifyCodeCss.input}
          />
        </View>
        <View style={VerifyCodeCss.touchView}>
          <TouchableOpacity 
            style={VerifyCodeCss.dangki}
            onPress={()=>{nagivation.navigate('NewPass')}}
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Xác Nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[VerifyCodeCss.dangki,{marginTop: 10}]}
            onPress={()=>{nagivation.navigate('ForgetPass')}}
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Quay lại</Text>
          </TouchableOpacity>
          
          <View style={VerifyCodeCss.dangnhapview}>
            <Text style={[VerifyCodeCss.text,{fontSize: 13, right: 5}]}>Chưa nhận được mã xác nhận</Text>
            <TouchableOpacity
              onPress={()=>{
                alert('Chúng tôi đã gửi lại mã xác nhận, vui lòng xem và nhập lại!');
              }}
            >
              <Text style={[VerifyCodeCss.text,{fontSize: 13, textDecorationLine:'underline', fontWeight:'bold'}]}>Gửi lại</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default VerifyCode