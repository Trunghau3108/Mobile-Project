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
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#146C94' }}>Quên mật khẩu</Text>
          <Text style={{ color: 'gray' }}>Vui lòng nhập số điện thoại để gửi mã xác nhận</Text>
        </View>
        <View style={ForgetPassCss.inputView}>
          <Feather name="phone" size={20} color="#146C94" />
          <TextInput
            placeholder='Nhập số điện thoại...'
            style={ForgetPassCss.input}
          />
        </View>
        <View style={ForgetPassCss.touchView}>
          <TouchableOpacity
            style={ForgetPassCss.dangki}
            onPress={() => {
              nagivation.replace('Verify');
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Xác Nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ForgetPassCss.dangki,{marginTop: 10}]}
            onPress={() => {
              nagivation.replace('Signin');
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Quay lại</Text>
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