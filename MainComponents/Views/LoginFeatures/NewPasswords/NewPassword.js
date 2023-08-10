import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React, {useState,useEffect} from 'react'
import ForgetPassCss from '../ForgetPass/ForgetPassCss';
import NewPasswordCss from './NewPasswordCss';
import { useNavigation } from '@react-navigation/native';
import url from '../../../../urlAPI';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NewPassword = () => {
  const nagivation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isFocused = useIsFocused();
  const [userInfo, setUserInfo] = useState(null);
  

  useEffect(() => {
    const retrieveUserInfo = async () => {
      try {
        const jsonString = await AsyncStorage.getItem('mail');
        if (jsonString) {
          const userData = JSON.parse(jsonString);
          setUserInfo(userData);
          console.log(userData)
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };
    
    if (isFocused) {
      retrieveUserInfo();
    }
  }, [isFocused]);

  const handleUpdate = async () => {
    // Perform signup validation here
    if (password.trim() === '' || confirmPassword.trim() === '') {
      alert('Vui lòng điền mật khẩu');
    } else if (password !== confirmPassword) {
      alert('Mật khẩu nhập không trùng khớp');
    } else {
      // Perform the signup process here
      try {
        const payload = {
          email: userInfo.email,
          password: password,
        };
        // Make a POST request to your backend API
        const response = await axios.post(url+'/api/customers/UpdateCustomer', payload);

        if (response.status === 200) {
          alert('Success', 'Change Password successful!');
          nagivation.navigate("Signin");
        } else {
          alert('Error', 'Signup failed. Please try again later.');
        }
      } catch (error) {
        alert("Signup failed. Please try again later.");
        
      }
    }
  };
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
            onChangeText={(text) => setPassword(text)}
            style={NewPasswordCss.input}
          />
        </View>
        <View style={NewPasswordCss.inputView}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập lại mật khẩu...'
            onChangeText={(text) => setConfirmPassword(text)}
            style={NewPasswordCss.input}
          />
        </View>
        <View style={NewPasswordCss.touchView}>
          <TouchableOpacity 
            style={NewPasswordCss.dangki}
            onPress={handleUpdate}
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Xác Nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[NewPasswordCss.dangki,{ marginTop: 10}]}
            onPress={() => {
              nagivation.goBack()
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