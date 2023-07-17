import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Feather, AntDesign, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import SigninCss from './SigninCss'
import Account from '../../../VisualData/DataAcountUser';

const Signin = () => {
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const Dangnhap = () => {
    for (let i = 0; i < Account.length; i++) {
      if (userPhone === Account[i].phone) {
        for (let p = 0; p < Account.length; p++) {
          if (userPassword === Account[p].password) {
            alert('Đăng nhập thành công');
            nagivation.replace('Home');
          }
          else {
            alert('Sai mật khẩu rồi!');
          }
        }
      }
      else {
        alert('Không tìm thấy số điện thoại !');
      }
    }
  }

  const nagivation = useNavigation();
  return (
    <SafeAreaView style={SigninCss.container}>
      <Image
        source={require('../../../../assets/LoginFeaturesImg/SiginPic.png')}
        style={SigninCss.img}
      />
      <View style={SigninCss.main}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#146C94' }}>Xin chào</Text>
        <Text style={{ color: 'gray' }}>Đăng nhập vào tài khoản của bạn</Text>
        <View style={[SigninCss.inputview, { marginTop: 50 }]}>
          <Feather name="phone" size={20} color="#146C94" />
          <TextInput
            placeholder='Nhập số điện thoại...'
            style={SigninCss.input}
            value={userPhone}
            onChangeText={(userPhone) => setUserPhone(userPhone)}
          />
        </View>
        <View style={SigninCss.inputview}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput
            placeholder='Nhập mật khẩu...'
            keyboardType='number-pad'
            secureTextEntry={true}
            style={SigninCss.input}
            value={userPassword}
            onChangeText={(userPassword) => setUserPassword(userPassword)}
          />
        </View>
        <View style={SigninCss.link}>
          <TouchableOpacity style={[SigninCss.linkTouch,{flexDirection: 'row', alignItems:'center'}]} onPress={() => setSelection(!isSelected)}>
            {isSelected ?
              <AntDesign name="checksquareo" size={24} color="#146C94" />
              :
              <Feather name="square" size={24} color="gray" />
            }
            <Text style={[SigninCss.text, { fontSize: 12, marginLeft: 5}]}>Nhớ mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={SigninCss.linkTouch}
            onPress={() => {
              nagivation.replace('ForgetPass');
            }}
          >
            <Text style={[SigninCss.text, { fontSize: 12, alignSelf: 'flex-end' }]}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={SigninCss.dangnhap}
          onPress={() => { nagivation.replace('TabHome') }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Đăng Nhập</Text>
        </TouchableOpacity>
        <View style={SigninCss.dangkiview}>
          <Text style={[SigninCss.text, { fontSize: 13, right: 5 }]}>Chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={() => {
              nagivation.replace('Signup');
            }}
          >
            <Text style={[SigninCss.text, { fontSize: 13, textDecorationLine: 'underline', fontWeight: 'bold' }]}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Signin