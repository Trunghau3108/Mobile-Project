import {Modal, SafeAreaView, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import SignupCss from './SignupCss';
import VerifySignupCss from './VerifySignupCss';
import { MaterialCommunityIcons, Feather, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const nagivation = useNavigation();
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
                      <TouchableOpacity 
                          style={[VerifySignupCss.touch,{marginLeft:'4%', backgroundColor:'#9F9F9F'}]}
                          onPress={() => setModalVisible(!modalVisible)}
                      >
                          <Text style={{fontWeight: 'bold', color:'white'}}>Hủy</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </Modal>
      <View style={SignupCss.header}>
        <TouchableOpacity style={SignupCss.goBack} onPress={()=>{nagivation.goBack()}}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={SignupCss.tittle}>
          <Text style={SignupCss.textHeader}>Registers</Text>
        </View>
        <View style={SignupCss.bonus}></View>
      </View>
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
          <MaterialCommunityIcons name="account" size={24} color="#146C94" />
          <TextInput
            placeholder='Nhập tên...'
            style={SignupCss.input}
          />
        </View>
        <View style={SignupCss.inputView}>
          <Feather name="phone" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập số điện thoại...'
            style={SignupCss.input}
          />
        </View>
        <View style={SignupCss.inputView}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập mật khẩu...'
            secureTextEntry={true}
            style={SignupCss.input}
          />
        </View>
        <View style={SignupCss.inputView}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput 
            placeholder='Nhập lại mật khẩu...'
            secureTextEntry={true}
            style={SignupCss.input}
          />
        </View>
        <View style={SignupCss.touchView}>
          <TouchableOpacity 
            style={SignupCss.dangki}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15,}}>Đăng Kí</Text>
          </TouchableOpacity>
          <View style={SignupCss.dangnhapview}>
            <Text style={[SignupCss.text,{fontSize: 13, right: 5}]}>Dã có tài khoản?</Text>
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