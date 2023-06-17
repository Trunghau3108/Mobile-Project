import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import SigninCss from './SigninCss'
import Account from '../../VisualData/DataAcountUser';

const Signin = () => {
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const Dangnhap = () => {
    for(let i = 0; i < Account.length; i++) {
      if(userPhone === Account[i].phone) {
        for(let p = 0; p < Account.length; p++) {
          if(userPassword === Account[p].password) {
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
        source={{ uri:'https://scontent.xx.fbcdn.net/v/t1.15752-9/350219221_636340484690964_2780560088413677302_n.png?stp=dst-png_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=aF5h5ugNyFIAX-YKK6_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQGpB_YfqGPq0USHUOX5sGuxMU_G4nw395y2Ki5LsYknQ&oe=64995B75'}}
        style={SigninCss.img}
      />
      <View style={SigninCss.main}>
        <Text style={{fontSize: 40, fontWeight:'bold', color:'#146C94'}}>Xin chào</Text>
        <Text style={{color:'gray'}}>Đăng nhập vào tài khoản của bạn</Text>
        <View style={[SigninCss.inputview,{marginTop: 50}]}>
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
          <TouchableOpacity>
            <Text style={[SigninCss.text,{fontSize: 12}]}>Nhớ mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{
              nagivation.replace('ForgetPass');
            }}
          >
            <Text style={[SigninCss.text,{fontSize: 12, left: 125}]}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={SigninCss.dangnhap}
          onPress={() =>{nagivation.replace('Home')}}
        >
          <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Đăng Nhập</Text>
        </TouchableOpacity>
        <View style={SigninCss.dangkiview}>
          <Text style={[SigninCss.text,{fontSize: 13, right: 5}]}>Chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={()=>{
              nagivation.replace('Signup');
            }}
          >
            <Text style={[SigninCss.text,{fontSize: 13, textDecorationLine:'underline', fontWeight:'bold'}]}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
<<<<<<< HEAD
=======

>>>>>>> 643e98e716ac06ec7a1708d58f4d1914dde22a7b
export default Signin