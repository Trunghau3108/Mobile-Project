import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  SectionList,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import UserPrivateInfoCss from "../../ProfilesFetures/UserPrivateInfo/UserPrivateInfoCss";
import Method1 from "./Method1";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const Payment = () => {
  const [ten, email, pass, coupon, onChangeText] = React.useState("");
  const [phone, onChangeNumber] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const nagivation = useNavigation();
  return (
    <View>
      <View style={{ width: width, height: 80, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: '#156791' }}> Thanh Toán</Text>
      </View>
      <ScrollView style={styles.paymentTong}>
        <View style={styles.paymentInfo}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 30,
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
                  value={ten}
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
                  value={phone}
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
                  value={email}
                  placeholder="Nhập Email"
                />
              </View>
            </View>
            <View style={UserPrivateInfoCss.PasswordInput}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#146C94" }}
              >
                Password
              </Text>
              <View style={UserPrivateInfoCss.PasswordInput1}>
                <Entypo
                  name="lock"
                  size={24}
                  color="#146C94"
                  style={{ marginLeft: 10 }}
                />
                <TextInput
                  style={UserPrivateInfoCss.input4}
                  onChangeText={onChangeText}
                  value={pass}
                  placeholder="Nhập Password"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)} // Khi nhấn vào, đảo ngược giá trị của showPassword
                  style={{ marginLeft: 195 }}
                >
                  {showPassword ? (
                    <Entypo name="eye" size={24} color="#146C94" />
                  ) : (
                    <Entypo name="eye-with-line" size={24} color="#146C94" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.paymentMethod}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
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
              marginTop: 10,
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
              value={coupon}
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
          onPress={()=>{
            alert('Đặt xe thành công !');
            nagivation.navigate('Home')
          }}
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

const styles = StyleSheet.create({
  paymentTong: {
    height: height,
    width: width,
  },
  paymentInfo: {
    height: (height * 50) / 100,
    width: width,
  },
  paymentMethod: {
    width: width,
  },
  Coupon: {
    height: (height * 25) / 100,
    width: width,
  },
  CouponInput: {
    height: 50,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#EEFAFF",
    padding: 10,
    margin: 10,
    marginBottom: -10,
  },
  inputCoupon: {
    marginLeft: 10,
    color: "#146C94",
  },
  buttonConfirm: {
    position: "absolute",
    height: "7%",
    width: (width * 90) / 100,
    backgroundColor: "#146C94",
    top: "81%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  goBack: {
    position: 'absolute',
    top: 20,
    left: 15,
  },
});
