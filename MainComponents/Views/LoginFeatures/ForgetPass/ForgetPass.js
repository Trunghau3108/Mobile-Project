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
          source={{
            uri:'https://scontent.xx.fbcdn.net/v/t1.15752-9/349216882_175082398549945_529646601240619571_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Jnf0pCuquwAX-u-BzO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTk39XrpsuQVkt1mJjBPgvIv5R-sEnHoqkAQ8Ah4RTh3Q&oe=649C20FA'
          }}
          style={ForgetPassCss.img}
        />
      </View>
      <View style={ForgetPassCss.main}>
        <View style={ForgetPassCss.textView}>
          <Text style={{fontSize: 40, fontWeight:'bold', color:'#146C94'}}>Quên mật khẩu</Text>
          <Text style={{color:'gray'}}>Lấy lại mật khẩu</Text>
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
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Xác Nhận</Text>
          </TouchableOpacity>
          <View style={ForgetPassCss.dangnhapview}>
            <Text style={[ForgetPassCss.text,{fontSize: 13, right: 5}]}>Dã có tài khoản?</Text>
            <TouchableOpacity
              onPress={()=>{
                nagivation.replace('Signin');
              }}
            >
              <Text style={[ForgetPassCss.text,{fontSize: 13, textDecorationLine:'underline', fontWeight:'bold'}]}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgetPass