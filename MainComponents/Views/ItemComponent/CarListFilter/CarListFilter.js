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
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import CarFilCss from "./CarFilCss";
import LocateFilCss from "./LocateFilCss";
const CarListFilter = () => {
  return (
    <FilterLocation />
    // <FilterCars />
  );
};
const FilterLocation = () => {
  return (
    <View style={LocateFilCss.LocationFil}>
      <View style={LocateFilCss.Location1}>
        <View style={LocateFilCss.Locate1}>
          <Ionicons name="ios-location-outline" size={40} color="black" />
        </View>
        <View style={LocateFilCss.Locate2}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            TP. Hồ Chí Minh
          </Text>
          <Text>10:00 12/06/23 </Text>
          <Text>11:00 12/06/23 </Text>
        </View>
        <View style={LocateFilCss.Locate3}>
          <TouchableOpacity>
            <Text style={{ color: "#146C94", fontSize: 17 }}> THAY ĐỔI </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={LocateFilCss.Location2}>
        <View style={LocateFilCss.Locate4}>
          <Entypo name="list" size={30} color="black" />
        </View>
        <View style={LocateFilCss.Locate5}>
          <Text style={{ fontSize: 15 }}>
            Ô tô, Kiểu xe, Hộp số, Chỗ ngồi...
          </Text>
        </View>
        <TouchableOpacity style={LocateFilCss.Locate6}>
          <Entypo name="chevron-down" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={LocateFilCss.Location3}>
        <View style={LocateFilCss.Locate7}>
          <View style={LocateFilCss.Locate12}>
            <View style={LocateFilCss.Locate9}>
              <Entypo name="list" size={30} color="black" />
            </View>
            <View style={LocateFilCss.Locate10}>
              <Text style={{ fontSize: 15 }}>Giá từ thấp đến cao</Text>
            </View>
            <TouchableOpacity style={LocateFilCss.Locate11}>
              <Entypo name="chevron-down" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={LocateFilCss.Locate8}>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                alignSelf: "center",
              }}
            >
              Lọc
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const FilterCars = () => {
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
          <TouchableOpacity style={CarFilCss.TypeCar}>
            <FontAwesome5 name="car" size={24} color="black" />
            <Text style={{ marginTop: 5 }}>Ô tô</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CarFilCss.TypeMotor}>
            <Fontisto name="motorcycle" size={24} color="black" />
            <Text style={{ marginTop: 5 }}>Mô tô</Text>
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
        <TouchableOpacity style={CarFilCss.CarStyleAll}>
          <Text style={{ alignSelf: "center", margin: 10 }}>
            {" "}
            Tất cả kiểu xe
          </Text>
        </TouchableOpacity>
        <View style={CarFilCss.CarStyleChoose}>
          <TouchableOpacity style={CarFilCss.SeatStyle1}>
            <FontAwesome5 name="car" size={24} color="black" />
            <Text style={{ marginTop: 5 }}>4/5 chỗ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CarFilCss.SeatStyle2}>
            <FontAwesome5 name="car" size={24} color="black" />
            <Text style={{ marginTop: 5 }}>7 chỗ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CarFilCss.SeatStyle3}>
            <FontAwesome5 name="car" size={24} color="black" />
            <Text style={{ marginTop: 5 }}>16 chỗ</Text>
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
      <TouchableOpacity style={CarFilCss.CarFilCloseButton}>
        <Text style={{ color: "#fff" }}>Đóng</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CarListFilter;
