import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import React, { useState,useEffect } from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import UserPrivateInfoCss from "../../ProfilesFetures/UserPrivateInfo/UserPrivateInfoCss";
import Method1 from "./Method1";
import styles from "./PaymentCss";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import Popup from "../../ItemComponent/Popup/Popup";
import moment from 'moment';
import axios from "axios";
import url from "../../../../urlAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';


const { width, height } = Dimensions.get("screen");

const Payment = () => {
  const route = useRoute();
  const [ten, email, pass, onChangeText] = React.useState("");
  const [phone, onChangeNumber] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const [pay,setPay] = useState('');
  const isFocused = useIsFocused();
  const [userInfo, setUserInfo] = useState(null);

  const whereCar = route.params.whereCar;
  const rentCar = route.params.rentCar;
  const returnCar = route.params.returnCar;
  const coupon = route.params.coupon;
  const id = route.params.id;

  const inputFormat = "YYYY-MM-DD HH:mm";
  const outputFormat = "YYYY-MM-DDTHH:mm:ss";

  const rentCarDate = moment(rentCar, inputFormat).format(outputFormat);
  const returnCarDate = moment(returnCar, inputFormat).format(outputFormat);



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


  const handleXacNhanThanhToan = async ()  => {
    setModal(true)
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
  

  const nagivation = useNavigation();
  return (
    <View>
      <Popup
        visible={modal}
        icon="checkmark-done-sharp"
        text="Thanh toán thành công !"
        onPress={() => { 
          setModal(false);
          nagivation.navigate('TabHome');
         }}
      />
      <View style={{ width: width, height: 80, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: '#156791' }}> Thanh Toán</Text>
      </View>
      <ScrollView style={styles.paymentTong}>
        <View style={styles.paymentInfo}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              fontWeight: "bold",
              color: "#146C94",
              marginLeft: 15,
            }}
          >
            1. Nhập thông tin khách hàng
          </Text>
          <View style={UserPrivateInfoCss.InputInfo}>
            <View style={UserPrivateInfoCss.NameInput}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#146C94" }}
              >
                Tên
              </Text>
              <View style={UserPrivateInfoCss.NameInput1}>
                <AntDesign
                  name="user"
                  size={24}
                  color="#146C94"
                  style={{ marginLeft: 10 }}
                />
                <TextInput
                  style={UserPrivateInfoCss.input1}
                  onChangeText={onChangeText}
                  value={userInfo ? userInfo.fullname : ''}
                  placeholder="Nhập Tên"
                />
              </View>
            </View>
            <View style={UserPrivateInfoCss.PhoneInput}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#146C94" }}
              >
                Số điện thoại
              </Text>
              <View style={UserPrivateInfoCss.PhoneInput1}>
                <AntDesign
                  name="phone"
                  size={24}
                  color="#146C94"
                  style={{ marginLeft: 10, transform: [{ rotateY: "180deg" }] }}
                />
                <TextInput
                  style={UserPrivateInfoCss.input2}
                  onChangeText={onChangeNumber}
                  value="012345678"
                  keyboardType="numeric"
                  placeholder="Nhập Số điện thoại "
                />
              </View>
            </View>
            <View style={UserPrivateInfoCss.EmailInput}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#146C94" }}
              >
                Email
              </Text>
              <View style={UserPrivateInfoCss.EmailInput1}>
                <AntDesign
                  name="mail"
                  size={24}
                  color="#146C94"
                  style={{ marginLeft: 10 }}
                />
                <TextInput
                  style={UserPrivateInfoCss.input3}
                  onChangeText={onChangeText}
                  value={userInfo ? userInfo.email : ''}
                  placeholder="Nhập Email"
                />
              </View>
            </View>
            <View style={UserPrivateInfoCss.PasswordInput}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#146C94" }}
              >
                Decription
              </Text>
              <View style={UserPrivateInfoCss.PasswordInput1}>
                <Entypo
                  name="plus"
                  size={24}
                  color="#146C94"
                  style={{ marginLeft: 10 }}
                />
                <TextInput
                  style={UserPrivateInfoCss.input4}
                  onChangeText={onChangeText}
                  value={pass}
                  placeholder="Nhập Decription"
                  secureTextEntry={!showPassword}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.paymentMethod}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#146C94",
              marginLeft: 15,
            }}
          >
            2. Chọn phương thức thanh toán
          </Text>
          <Method1 />
        </View>
        <View style={styles.Coupon}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#146C94",
              marginLeft: 15,
            }}
          >
            3. Nhập mã giảm giá
          </Text>
          <View style={styles.CouponInput}>
            <TextInput
              style={styles.inputCoupon}
              onChangeText={onChangeText}
              placeholder="Nhập mã giảm giá"
            />
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        colors={["#156791", "#209ddd", "#2498ff"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonConfirm}
      >
        <TouchableOpacity
          onPress={handleXacNhanThanhToan}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Xác Nhận Thanh Toán
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <TouchableOpacity style={styles.goBack} onPress={() => { nagivation.goBack() }}>
        <Ionicons name="arrow-back" size={35} color="#156791" />
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

