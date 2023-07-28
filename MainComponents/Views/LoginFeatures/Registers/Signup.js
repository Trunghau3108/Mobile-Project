import {Modal, SafeAreaView, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import SignupCss from './SignupCss';
import VerifySignupCss from './VerifySignupCss';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import url from '../../../../urlAPI';
const Signup = () => {
  const nagivation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSignup = async () => {
    // Perform signup validation here
    if (email.trim() === '' || password.trim() === '' || fullname.trim() === '' || confirmPassword.trim() === '') {
      alert('Error', 'Please fill in all fields');
    } else if (password !== confirmPassword) {
      alert('Error', 'Passwords do not match');
    } else {
      // Perform the signup process here
      try {
        const payload = {
          email: email,
          password: password,
          fullname: fullname
        };

        // Make a POST request to your backend API
        const response = await axios.post(url+'/api/customers/CreateCustomer', payload);

        if (response.status === 200) {
          setModalVisible(true);
          nagivation.navigate("Signin")

        } else {
          alert('Error', 'Signup failed. Please try again later.');
        }
      } catch (error) {
        alert('Error:', error);
        alert('Error', 'Signup failed. Please try again later.');
      }
    }
  };

  return (
    <SafeAreaView style={SignupCss.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
          <View style={VerifySignupCss.centeredView}>
              <View style={VerifySignupCss.modalView}>
                  <View style={VerifySignupCss.textView}>
                      <Ionicons name="checkmark-done-sharp" size={40} color="#146C94" />
                      <Text style={{marginLeft: 20, fontSize: 15}}>Đăng kí thành công !</Text>
                  </View>
                  <View style={VerifySignupCss.touchView}>
                      <TouchableOpacity 
                          style={[VerifySignupCss.touch,{backgroundColor:'#146C94'}]}
                          onPress={() =>{
                            setModalVisible(!modalVisible);
                            nagivation.replace('Signin');
                          }}
                      >
                          <Text style={{fontWeight: 'bold', color:'white'}}>Đồng ý</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </Modal>
      <View style={SignupCss.imgView}>
        <Image
          source={require('../../../../assets/LoginFeaturesImg/SignUp.png')}
          style={SignupCss.img}
        />
      </View>
      <View style={SignupCss.main}>
        <View style={SignupCss.textView}>
          <Text style={{fontSize: 40, fontWeight:'bold', color:'#146C94'}}>Đăng kí</Text>
          <Text style={{color:'gray'}}>Tạo cho bạn một tài khoản mới</Text>
        </View>
          <View style={SignupCss.inputView}>
        <Feather name="mail" size={20} color="#146C94" />
        <TextInput
          placeholder="Nhập Email..."
          style={SignupCss.input}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={SignupCss.inputView}>
        <Feather name="user" size={20} color="#146C94" />
        <TextInput
          placeholder="Nhập FullName..."
          style={SignupCss.input}
          onChangeText={(text) => setFullname(text)}
        />
      </View>
      <View style={SignupCss.inputView}>
        <Feather name="lock" size={20} color="#146C94"/>
        <TextInput
          placeholder="Nhập mật khẩu..."
          secureTextEntry={true}
          style={SignupCss.input}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={SignupCss.inputView}>
        <Feather name="lock" size={20} color="#146C94" />
        <TextInput
          placeholder="Nhập lại mật khẩu..."
          secureTextEntry={true}
          style={SignupCss.input}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
        <View style={SignupCss.touchView}>
          <TouchableOpacity 
            style={SignupCss.dangki}
            onPress={handleSignup}
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Đăng Kí</Text>
          </TouchableOpacity>
          <View style={SignupCss.dangnhapview}>
            <Text style={[SignupCss.text,{fontSize: 13, right: 5}]}>Đã có tài khoản?</Text>
            <TouchableOpacity
              onPress={()=>{
                nagivation.replace('Signin');
              }}
            >
              <Text style={[SignupCss.text,{fontSize: 13, textDecorationLine:'underline', fontWeight:'bold'}]}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Signup