import {  SafeAreaView, ScrollView, StatusBar,keyboardVerticalOffset,Keyboard, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList, TextInput,TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native'
import React,{useState,useEffect} from 'react'
import ImageOnly from '../../ItemComponent/ProfileComponent/ImageOnly';
import { AntDesign,Entypo } from '@expo/vector-icons';
import UserPrivateInfoCss from './UserPrivateInfoCss';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const UserPrivateInfo = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [password, setPassword] = useState('');
    // const [ten,email,pass, onChangeText] = React.useState('');
    // const [phone, onChangeNumber] = React.useState('');
    const [showPassword, setShowPassword] = useState(false);
    const isFocused = useIsFocused();

    // const handleUpdateInfo = () => {
    //     console.log("name" + name);
    //     console.log("s đ t" + phone);
    //     console.log("email cua m:" + email);
    //     console.log("password" + password);
    // }
    useEffect(() => {
        const retrieveUserInfo = async () => {
          try {
            const jsonString = await AsyncStorage.getItem('user');
            if (jsonString) {
              const userData = JSON.parse(jsonString);
              setUserInfo(userData);
              
            }
          } catch (error) {
            console.error('Error retrieving user data from AsyncStorage:', error);
          }
        };
    
        // Retrieve user data whenever the screen gains focus
        if (isFocused) {
          retrieveUserInfo();
        }
      }, [isFocused]);
      
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
                            onChangeText={(name) => setName(name)}
                            value  = {name}
                            placeholder={userInfo ? userInfo.fullname : ''}
                        />
                    </View>
                </View>
                <View style = {UserPrivateInfoCss.PhoneInput}>
                    <Text style = {{fontSize:18,fontWeight:'bold',color:'#146C94'}}>Số điện thoại</Text>
                    <View style = {UserPrivateInfoCss.PhoneInput1}>
                        <AntDesign name="phone" size={24} color="#146C94" style = {{marginLeft:10,transform: [{rotateY: '180deg'}]}} />
                        <TextInput
                            style = {UserPrivateInfoCss.input2}
                            onChangeText={(phone) => setPhone(phone)}
                            value  = {phone}
                            keyboardType="numeric"
                            placeholder= {userInfo ? userInfo.photo : ''}
                        />
                    </View>
                </View>
                <View style = {UserPrivateInfoCss.EmailInput}>
                    <Text style = {{fontSize:18,fontWeight:'bold',color:'#146C94'}}>Email</Text>
                    <View style = {UserPrivateInfoCss.EmailInput1}>
                        <AntDesign name="mail" size={24} color="#146C94" style = {{marginLeft:10}} />
                        <TextInput
                            style = {UserPrivateInfoCss.input3}
                            onChangeText={(email) => setEmail(email)}
                            value  = {email}
                            placeholder={userInfo ? userInfo.email : ''}
                        />
                    </View>
                </View>
                <View style = {UserPrivateInfoCss.PasswordInput}>
                    <Text style = {{fontSize:18,fontWeight:'bold',color:'#146C94'}}>Password</Text>
                    <View style = {UserPrivateInfoCss.PasswordInput1}>
                        <Entypo name="lock" size={24} color="#146C94" style = {{marginLeft:10}} />
                        <TextInput
                            style = {UserPrivateInfoCss.input4}
                            onChangeText={(password) => setPassword(password)}
                            value  = {password}
                            placeholder={userInfo ? userInfo.password : ''}
                            
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)} // Khi nhấn vào, đảo ngược giá trị của showPassword
                            style={{position: "absolute", top: "30%", right: '4%'}}
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