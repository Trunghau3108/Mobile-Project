import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, } from 'react-native'
import React from 'react'
import NewPasswordCss from './NewPasswordCss'

const NewPassword = () => {
  return (
    <SafeAreaView style={NewPasswordCss.container}>
      <Image
        source={{ uri:'https://scontent.xx.fbcdn.net/v/t1.15752-9/350219221_636340484690964_2780560088413677302_n.png?stp=dst-png_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=aF5h5ugNyFIAX-YKK6_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQGpB_YfqGPq0USHUOX5sGuxMU_G4nw395y2Ki5LsYknQ&oe=64995B75'}}
        style={NewPasswordCss.img}
      />
      <View style={NewPasswordCss.main}>
        <Text style={{fontSize: 40, fontWeight:'bold', color:'#146C94'}}>Xin chào</Text>
        <Text style={{color:'gray'}}>Đăng nhập vào tài khoản của bạn</Text>
        <View style={[NewPasswordCss.inputview,{marginTop: 50}]}>
          <Feather name="phone" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập số điện thoại...'
            style={NewPasswordCss.input}
            value={userPhone}
            onChangeText={(userPhone) => setUserPhone(userPhone)}
          />
        </View>
        <View style={NewPasswordCss.inputview}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập mật khẩu...'
            keyboardType='number-pad'
            secureTextEntry={true}
            style={NewPasswordCss.input}
            value={userPassword}
            onChangeText={(userPassword) => setUserPassword(userPassword)}
          />
        </View>
        <View style={NewPasswordCss.link}>
          <TouchableOpacity>
            <Text style={[SigninCss.text,{fontSize: 12}]}>Nhớ mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{
              nagivation.replace('ForgetPass');
            }}
          >
            <Text style={[NewPasswordCss.text,{fontSize: 12, left: 125}]}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={NewPasswordCss.dangnhap}
          onPress={() =>{nagivation.replace('Home')}}
        >
          <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Đăng Nhập</Text>
        </TouchableOpacity>
        <View style={NewPasswordCss.dangkiview}>
          <Text style={[NewPasswordCss.text,{fontSize: 13, right: 5}]}>Chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={()=>{
              nagivation.replace('Signup');
            }}
          >
            <Text style={[NewPasswordCss.text,{fontSize: 13, textDecorationLine:'underline', fontWeight:'bold'}]}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewPassword