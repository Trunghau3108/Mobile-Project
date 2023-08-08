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
import React, { useState, useEffect } from "react";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import CarFilCss from "./CarFilCss";
import SelectDropdown from "react-native-select-dropdown";
import url from "../../../../urlAPI";
import axios from "axios";

const CarFil = (props) => {
  const [isLoaiXe, setIsLoaiXe] = useState('');
  const [isKieuXe, setIsKieuXe] = useState('');
  const [isHang, setIsHang] = useState('');
  const [listOfId, setListOfId] = useState([]);

  const getSupplier = async () => {
    let res = await axios.post(url + "/api/Supplier/GetListSuppliers");
    const listOfIds = res.data.map(item => item.id);
    setListOfId(listOfIds);

  }

  useEffect(() => {
    getSupplier();
  }, []);

  useEffect(() => {
    if (props.onFilterChange) {
      props.onFilterChange(isLoaiXe, isKieuXe, isHang);
    }
  }, [isLoaiXe, isKieuXe, isHang]);

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
          <Box
            icon='car'
            loaiXe="Ô tô"
            onPress={()=>{props.onLoaiXeChange('Ô tô');}}
          />
          <Box
            icon='car'
            loaiXe="Mô tô"
            onPress={()=>{props.onLoaiXeChange('Mô tô');}}
          />
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
        <Box
          loaiXe="Tất cả kiểu xe"
          onPress={()=>{props.onKieuXeChange()}}
        />
        <View style={CarFilCss.CarStyleChoose}>
          <Box
            icon='car'
            loaiXe="4 chỗ"
            onPress={()=>{props.onKieuXeChange(4)}}
          />
          <Box
            icon='car'
            loaiXe="5 chỗ"
            onPress={()=>{props.onKieuXeChange(5)}}
          />
          <Box
            icon='car'
            loaiXe="7 chỗ"
            onPress={()=>{props.onKieuXeChange(7)}}
          />
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
            <SelectDropdown
              buttonStyle={CarFilCss.ChooseBrandButton1}

              data={listOfId}
              onSelect={(selectItem, index) => {
                props.onHangChange(selectItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <TouchableOpacity style={CarFilCss.ChooseBrandButton2}>
              <Entypo name="chevron-down" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={CarFilCss.CarFilCloseButton}
        onPress={() => {
          props.onPress();
        }}
      >
        <Text style={{ color: "#fff" }}>Đóng</Text>
      </TouchableOpacity>
    </View>
  );
};

const Box = (props) => {
  const [isColor, setIsColor] = useState(false);
  return (
    <TouchableOpacity
      style={[CarFilCss.TypeCar, { backgroundColor: isColor ? "#146C94" : "#ECECEC" }]}
      onPress={()=>{
        setIsColor(!isColor);
        props.onPress();
      }}
    >
      <FontAwesome5
        // name="car"
        name={props.icon}
        size={24}
        color={isColor ? "white" : "black"}
      />
      <Text
        style={{ marginTop: 5, color: isColor ? "white" : "black" }}
      >
        {props.loaiXe}
      </Text>
    </TouchableOpacity>
  );
}

export default CarFil;

const styles = StyleSheet.create({});
