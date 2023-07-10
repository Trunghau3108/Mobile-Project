import {  SafeAreaView, ScrollView, StatusBar,keyboardVerticalOffset,Keyboard, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList, TextInput,TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native'
import React,{useState} from 'react'
import ImageOnly from '../../ItemComponent/ProfileComponent/ImageOnly';
import { AntDesign,Entypo } from '@expo/vector-icons';
import UserPrivateInfoCss from './UserPrivateInfoCss';
const UserPrivateInfo = () => {
    const [ten,email,pass, onChangeText] = React.useState('');
    const [phone, onChangeNumber] = React.useState('');
    const [showPassword, setShowPassword] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style = {UserPrivateInfoCss.PrivateInfo}>
            <ImageOnly/>
            <View style = {UserPrivateInfoCss.InputInfo}>
                <View style = {UserPrivateInfoCss.NameInput}>
                    <Text style = {{fontSize:18,fontWeight:'bold',color:'#146C94'}}>Tên</Text>
                    <View style = {UserPrivateInfoCss.NameInput1}>
                        <AntDesign name="user" size={24} color="#146C94" style = {{marginLeft:10}} />
                        <TextInput
                            style = {UserPrivateInfoCss.input1}
                            onChangeText={onChangeText}
                            value  = {ten}
                            placeholder="Nhập Tên"
                        />
                    </View>
                </View>
                <View style = {UserPrivateInfoCss.PhoneInput}>
                    <Text style = {{fontSize:18,fontWeight:'bold',color:'#146C94'}}>Số điện thoại</Text>
                    <View style = {UserPrivateInfoCss.PhoneInput1}>
                        <AntDesign name="phone" size={24} color="#146C94" style = {{marginLeft:10,transform: [{rotateY: '180deg'}]}} />
                        <TextInput
                            style = {UserPrivateInfoCss.input2}
                            onChangeText={onChangeNumber}
                            value  = {phone}
                            keyboardType="numeric"
                            placeholder="Nhập Số điện thoại "
                        />
                    </View>
                </View>
                <View style = {UserPrivateInfoCss.EmailInput}>
                    <Text style = {{fontSize:18,fontWeight:'bold',color:'#146C94'}}>Email</Text>
                    <View style = {UserPrivateInfoCss.EmailInput1}>
                        <AntDesign name="mail" size={24} color="#146C94" style = {{marginLeft:10}} />
                        <TextInput
                            style = {UserPrivateInfoCss.input3}
                            onChangeText={onChangeText}
                            value  = {email}
                            placeholder="Nhập Email"
                        />
                    </View>
                </View>
                <View style = {UserPrivateInfoCss.PasswordInput}>
                    <Text style = {{fontSize:18,fontWeight:'bold',color:'#146C94'}}>Password</Text>
                    <View style = {UserPrivateInfoCss.PasswordInput1}>
                        <Entypo name="lock" size={24} color="#146C94" style = {{marginLeft:10}} />
                        <TextInput
                            style = {UserPrivateInfoCss.input4}
                            onChangeText={onChangeText}
                            value  = {pass}
                            placeholder="Nhập Password"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)} // Khi nhấn vào, đảo ngược giá trị của showPassword
                            style={{ marginLeft: 140 }}
                        >
                            {showPassword ? (
                                <Entypo name="eye" size={24} color="#146C94" />
                            ) : (
                                <Entypo name="eye-with-line" size={24} color="#146C94" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style ={UserPrivateInfoCss.ButtonXacNhan}>
                    <Text style = {{color:'white',fontWeight:'bold',fontSize:18}}>Xác nhận</Text>
                </TouchableOpacity>

            </View>
        </View>
    </TouchableWithoutFeedback>
    
  )
}

export default UserPrivateInfo