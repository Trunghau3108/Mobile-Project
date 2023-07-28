import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react'
import ForgetPassCss from './ForgetPassCss';
import { useNavigation } from '@react-navigation/native';
const ForgetPass = () => {
  const nagivation = useNavigation();
  return (
    <SafeAreaView style={ForgetPassCss.container}>
      <View style={ForgetPassCss.imgView}>
        <Image
          source={require('../../../../assets/LoginFeaturesImg/ForgotPass.png')}
          style={ForgetPassCss.img}
        />
      </View>
      <View style={ForgetPassCss.main}>
        <View style={ForgetPassCss.textView}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#146C94' }}>Xác Nhận Email</Text>
          <Text style={{ color: 'gray' }}>Vui lòng nhập email đã đăng ký</Text>
        </View>
        <View style={ForgetPassCss.inputView}>
          <Feather name="mail" size={20} color="#146C94" />
          <TextInput
            placeholder='Nhập email...'
            style={ForgetPassCss.input}
          />
        </View>
        <View style={ForgetPassCss.touchView}>
          <TouchableOpacity
            style={ForgetPassCss.dangki}
            onPress={() => {
              nagivation.replace('Forget');
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Xác Nhận</Text>
          </TouchableOpacity>
          <View style={ForgetPassCss.dangnhapview}>
            <Text style={[ForgetPassCss.text, { fontSize: 13, right: 5 }]}>Đã có tài khoản ?</Text>
            <TouchableOpacity
              onPress={() => {
                nagivation.replace('Signin');
              }}
            >
              <Text style={[ForgetPassCss.text, { fontSize: 13, textDecorationLine: 'underline', fontWeight: 'bold' }]}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgetPass