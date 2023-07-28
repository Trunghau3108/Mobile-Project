import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import UserPrivateInfoCss from "../../ProfilesFetures/UserPrivateInfo/UserPrivateInfoCss";
import Method1 from "./Method1";
import styles from "./PaymentCss";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import Popup from "../../ItemComponent/Popup/Popup";

const { width, height } = Dimensions.get("screen");

const Payment = () => {
  const route = useRoute();
  const [ten, email, pass, coupon, onChangeText] = React.useState("");
  const [phone, onChangeNumber] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false);

  const whereCar = route.params.whereCar;
  const rentCar = route.params.rentCar;
  const returnCar = route.params.returnCar;
  const id = route.params.id;

  const handleXacNhanThanhToan = () => {
    setModal(true)
    console.log("Thông tin hóa đơn:");
    console.log("IdProduct:", id);
    console.log("ở Vùng:", whereCar);
    console.log("ngày bắt đầu:", rentCar);
    console.log("ngày kết thúc:", returnCar);
  }

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

