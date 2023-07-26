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
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import CarFilCss from "./CarFilCss";
const CarFil = (props) => {
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  const [isPressed4, setIsPressed4] = useState(false);
  const [isPressed5, setIsPressed5] = useState(false);
  const [isPressed6, setIsPressed6] = useState(false);

  const handlePress1 = () => {
    setIsPressed1(!isPressed1);
    setIsPressed4(true);
    setIsPressed3(true);
    setIsPressed2(true);
  };
  const handlePress2 = () => {
    setIsPressed2(!isPressed2);
    setIsPressed1(false);
  };
  const handlePress3 = () => {
    setIsPressed3(!isPressed3);
    setIsPressed1(false);
  };
  const handlePress4 = () => {
    setIsPressed4(!isPressed4);
    setIsPressed1(false);
  };
  const handlePress5 = () => {
    setIsPressed6(false);
    setIsPressed5(!isPressed5);
  };
  const handlePress6 = () => {
    setIsPressed5(false);
    setIsPressed6(!isPressed6);
  };

  return (
    <View style={CarFilCss.CarFil}>
      <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: 10 }}>
        Lọc xe phù hợp
      </Text>
      <View style={CarFilCss.CarType}>
        <Text
          style={{
            marginLeft: 15,
            fontWeight: "bold",
            fontSize: 15,
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          Loại xe
        </Text>
        <View style={CarFilCss.CarTypeChoose}>
          <TouchableOpacity
            style={[
              CarFilCss.TypeCar,
              {
                backgroundColor: isPressed5 ? "#146C94" : "#ECECEC",
              },
            ]}
            onPress={handlePress5}
          >
            <FontAwesome5
              name="car"
              size={24}
              color={isPressed5 ? "white" : "black"}
            />
            <Text
              style={{ marginTop: 5, color: isPressed5 ? "white" : "black" }}
            >
              Ô tô
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              CarFilCss.TypeMotor,
              {
                backgroundColor: isPressed6 ? "#146C94" : "#ECECEC",
              },
            ]}
            onPress={handlePress6}
          >
            <Fontisto
              name="motorcycle"
              size={24}
              color={isPressed6 ? "white" : "black"}
            />
            <Text
              style={{ marginTop: 5, color: isPressed6 ? "white" : "black" }}
            >
              Mô tô
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={CarFilCss.CarStyle}>
        <Text
          style={{
            marginLeft: 15,
            fontWeight: "bold",
            fontSize: 15,
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          Kiểu xe
        </Text>
        <TouchableOpacity
          style={[
            CarFilCss.CarStyleAll,
            {
              backgroundColor: isPressed1 ? "#146C94" : "#ECECEC",
            },
          ]}
          onPress={handlePress1}
        >
          <Text
            style={{
              alignSelf: "center",
              margin: 10,
              color: isPressed1 ? "white" : "black",
            }}
          >
            {" "}
            Tất cả kiểu xe
          </Text>
        </TouchableOpacity>
        <View style={CarFilCss.CarStyleChoose}>
          <TouchableOpacity
            style={[
              CarFilCss.SeatStyle1,
              {
                backgroundColor: isPressed2 ? "#146C94" : "#ECECEC",
              },
            ]}
            onPress={handlePress2}
          >
            <FontAwesome5
              name="car"
              size={24}
              color={isPressed2 ? "white" : "black"}
            />
            <Text
              style={{ marginTop: 5, color: isPressed2 ? "white" : "black" }}
            >
              4 chỗ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              CarFilCss.SeatStyle2,
              {
                backgroundColor: isPressed3 ? "#146C94" : "#ECECEC",
              },
            ]}
            onPress={handlePress3}
          >
            <FontAwesome5
              name="car"
              size={24}
              color={isPressed3 ? "white" : "black"}
            />
            <Text
              style={{ marginTop: 5, color: isPressed3 ? "white" : "black" }}
            >
              5 chỗ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              CarFilCss.SeatStyle3,
              {
                backgroundColor: isPressed4 ? "#146C94" : "#ECECEC",
              },
            ]}
            onPress={handlePress4}
          >
            <FontAwesome5
              name="car"
              size={24}
              color={isPressed4 ? "white" : "black"}
            />
            <Text
              style={{ marginTop: 5, color: isPressed4 ? "white" : "black" }}
            >
              7 chỗ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={CarFilCss.CarBrand}>
        <Text
          style={{
            marginLeft: 15,
            fontWeight: "bold",
            fontSize: 15,
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          Hãng xe
        </Text>
        <View style={CarFilCss.CarBrandChoose}>
          <View style={CarFilCss.ChooseBrand}>
            <TouchableOpacity style={CarFilCss.ChooseBrandButton1}>
              <Text>Chọn hãng xe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={CarFilCss.ChooseBrandButton2}>
              <Entypo name="chevron-down" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={CarFilCss.CarFilCloseButton}
        onPress={props.onPress}
      >
        <Text style={{ color: "#fff" }}>Đóng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CarFil;

const styles = StyleSheet.create({});
