import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import axios from "axios";
import SigninCss from "./SigninCss";
import url from "../../../../urlAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = ({ navigation }) => {
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const handleLogin = async () => {
    try {
      // Tạo đối tượng payload từ thông tin đăng nhập
      const payload = {
        email: userPhone,
        password: userPassword,
      };

      // Gửi yêu cầu POST đăng nhập đến API
      const response = await axios.post(url+"/api/customers/Login", payload);

      // Kiểm tra phản hồi từ API
      if (response.status === 200) {
        // Xử lý khi đăng nhập thành công
        const result = response.data;
        try {
          const jsonValue = JSON.stringify(result);
          await AsyncStorage.setItem('user', jsonValue);
        } catch (e) {
          console.log(e);
        }
        alert("Đăng nhập thành công");
        navigation.replace("TabHome");
      }else {
        // Xử lý khi đăng nhập không thành công
      }
    } catch (error) {
        alert("Đăng nhập thất bại: Sai email hoặc mật khẩu");
    }
  };

  const nagivation = useNavigation();

  return (
    <SafeAreaView style={SigninCss.container}>
      <Image
        source={require("../../../../assets/LoginFeaturesImg/SiginPic.png")}
        style={SigninCss.img}
      />
      <View style={SigninCss.main}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "#146C94" }}>
          Xin chào
        </Text>
        <Text style={{ color: "gray" }}>Đăng nhập vào tài khoản của bạn</Text>
        <View style={[SigninCss.inputview, { marginTop: 50 }]}>
          <Feather name="phone" size={20} color="#146C94" />
          <TextInput
            placeholder="Nhập Email..."
            style={SigninCss.input}
            onChangeText={(userPhone) => setUserPhone(userPhone)}
          />
        </View>
        <View style={SigninCss.inputview}>
          <Feather name="lock" size={20} color="#146C94" />
          <TextInput
            placeholder="Nhập mật khẩu..."
            keyboardType="number-pad"
            secureTextEntry={true}
            style={SigninCss.input}
            onChangeText={(userPassword) => setUserPassword(userPassword)}
          />
        </View>
        <View style={SigninCss.link}>
          <TouchableOpacity
            style={[
              SigninCss.linkTouch,
              { flexDirection: "row", alignItems: "center" },
            ]}
            onPress={() => setSelection(!isSelected)}
          >
            {isSelected ? (
              <AntDesign name="checksquareo" size={24} color="#146C94" />
            ) : (
              <Feather name="square" size={24} color="gray" />
            )}
            <Text style={[SigninCss.text, { fontSize: 12, marginLeft: 5 }]}>
              Nhớ mật khẩu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={SigninCss.linkTouch}
            onPress={() => {
              nagivation.replace("Forget");
            }}
          >
            <Text
              style={[SigninCss.text, { fontSize: 12, alignSelf: "flex-end" }]}
            >
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={SigninCss.dangnhap}
          onPress={handleLogin}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Đăng Nhập
          </Text>
        </TouchableOpacity>
        <View style={SigninCss.dangkiview}>
          <Text style={[SigninCss.text, { fontSize: 13, right: 5 }]}>
            Chưa có tài khoản?
          </Text>
          <TouchableOpacity
            onPress={() => {
              nagivation.replace("Signup");
            }}
          >
            <Text
              style={[
                SigninCss.text,
                {
                  fontSize: 13,
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                },
              ]}
            >
              Đăng kí
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Signin;
