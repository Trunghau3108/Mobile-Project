import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react'
import ForgetPassCss from '../ForgetPass/ForgetPassCss';
import NewPasswordCss from './NewPasswordCss';
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
  const nagivation = useNavigation();
  return (
    <SafeAreaView style={NewPasswordCss.container}>
      <View style={NewPasswordCss.imgView}>
        <Image
          source={require('../../../../assets/LoginFeaturesImg/InputPass.png')}
          style={NewPasswordCss.img}
        />
      </View>
      <View style={NewPasswordCss.main}>
        <View style={NewPasswordCss.textView}>
          <Text style={{fontSize: 40, fontWeight:'bold', color:'#146C94'}}>Nhập mật khẩu mới</Text>
          <Text style={{color:'gray'}}>Vui lòng nhập mật khẩu mới</Text>
        </View>
        <View style={NewPasswordCss.inputView}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập mật khẩu...'
            style={NewPasswordCss.input}
          />
        </View>
        <View style={NewPasswordCss.inputView}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập lại mật khẩu...'
            style={NewPasswordCss.input}
          />
        </View>
        <View style={NewPasswordCss.touchView}>
          <TouchableOpacity 
            style={NewPasswordCss.dangki}
            onPress={() => {
              nagivation.replace('Signin');
            }}
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Xác Nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[NewPasswordCss.dangki,{ marginTop: 10}]}
            onPress={() => {
              nagivation.goBack
            }}
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Quay lại</Text>
          </TouchableOpacity>
          <View style={NewPasswordCss.dangnhapview}>
            <Text style={[NewPasswordCss.text,{fontSize: 13, right: 5}]}>Đã có tài khoản ?</Text>
            <TouchableOpacity
              onPress={()=>{
                nagivation.replace('Signin');
              }}
            >
              <Text style={[NewPasswordCss.text,{fontSize: 13, textDecorationLine:'underline', fontWeight:'bold'}]}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewPassword