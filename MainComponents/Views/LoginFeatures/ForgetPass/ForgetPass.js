import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React, { useState } from "react";
import ForgetPassCss from './ForgetPassCss';
import { useNavigation } from '@react-navigation/native';
import url from "../../../../urlAPI";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ForgetPass = () => {
  const nagivation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const checkGmailFormat = (email) => {
    // Biểu thức chính quy kiểm tra định dạng email Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    return gmailRegex.test(email);
  };
  const handleInputChange = (email) => {
    setUserEmail(email);
    setIsValidEmail(checkGmailFormat(email));
  };
  const handleForgot = async () => {
    if (!isValidEmail) {
      alert("Email không hợp lệ !!! ");
    }
    else{
      try {
        // Tạo đối tượng payload từ thông tin đăng nhập
        const payload = {
          email: userEmail,
        };
        // Gửi yêu cầu POST đăng nhập đến API
        const response = await axios.post(url+"/api/customers/CheckMail", payload);
        // Kiểm tra phản hồi từ API
        if (response.status === 200) {
          // Xử lý khi đăng nhập thành công
          const result = response.data;
          try {
            const jsonValue = JSON.stringify(result);
            await AsyncStorage.setItem('mail', jsonValue);
            nagivation.navigate("Forget");
            console.log(jsonValue)
          } catch (e) {
            alert(e);
          }
        }else {
          alert("Email không tồn tại, hãy thử lại!");
        }
      } catch (error) {
          alert("Email không tồn tại, hãy thử lại!");
      }
    }
  };
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
            onChangeText={handleInputChange}
          />
        </View>
        <View style={ForgetPassCss.touchView}>
          <TouchableOpacity
            style={ForgetPassCss.dangki}
            onPress={handleForgot}
            
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