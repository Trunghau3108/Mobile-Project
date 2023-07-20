import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import { TouchableOpacity, TouchEvent } from "react-native";
import FilterListCss from "./FilterCss";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarItem from "../Calendar/CalendarItem";
import { getData } from "../../../../AsyncStorage";
import CarFil from "../CarListFilter/CarFil";
import SortPrice from "../SortPrice/SortPrice";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";


const FilterList = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // const [rentCarString, setRentCarString] = useState();
  // const [returnCarString, setReturnCarString] = useState();
  // const mySetCalen = async () => {
  //   const ngaydat = await getData("rentcar");
  //   const ngaytra = await getData("return");
  //   setRentCarString(ngaydat);
  //   setReturnCarString(ngaytra);
  // };
  // useEffect(() => {
  //   mySetCalen();
  // }, []);

  const [showCarFil, setShowCarFil] = useState(false);
  const [showSortPrice, setShowSortPrice] = useState(false);

  const [price, setPrice] = useState("Giá từ cao đến thấp");
  console.log(price);

  return (
    <>
      <SafeAreaView />
      <View style={FilterListCss.container}>
        <View style={FilterListCss.ltnhourctn}>
          <Ionicons name="ios-location-outline" size={35} color="black" />
          <View style={FilterListCss.ltnhour}>
            <Text style={FilterListCss.ltn}>{ltn}</Text>

            <Text style={FilterListCss.hour}>
              {route.params.selectedRentCar}
            </Text>

            <Text style={FilterListCss.hour}>
              {route.params.selectedReturnCar}
            </Text>
            {/* <Text style={FilterListCss.ltn}>{props.where}</Text>
            <Text style={FilterListCss.hour}>{props.rentcar}</Text>
            <Text style={FilterListCss.hour}>{props.returncar}</Text> */}
          </View>
          <TouchableOpacity onPress={navigation.goBack}>
            <Text style={FilterListCss.changebtn}> THAY ĐỔI</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={FilterListCss.fltctn}
          onPress={() => {
            setShowCarFil(true);
          }}
        >
          <Entypo name="list" size={25} color="black" />
          <Text>Ô tô, Kiểu xe, Hộp số, Chỗ ngồi...</Text>
          <Entypo name="chevron-down" size={25} color="black" />
        </TouchableOpacity>

        <View style={FilterListCss.prcctn}>
          <TouchableOpacity
            style={FilterListCss.prc}
            onPress={() => {
              setShowSortPrice(true);
            }}
          >
            <Entypo name="list" size={25} color="black" />
            <Text>{price}</Text>
            <Entypo name="chevron-down" size={25} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={FilterListCss.prcbtnctn}>
            <Text style={FilterListCss.prcbtntext}>Lọc</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={FilterListCss.BackSortPrice}>
        {showSortPrice ? (
          <>
            <SortPrice
              onPressUp={() => {
                setShowSortPrice(false);
                setPrice("Giá từ cao đến thấp");
              }}
              onPressDown={() => {
                setShowSortPrice(false);
                setPrice("Giá từ thấp đến cao");
              }}
              style={FilterListCss.SortPrice}
            />
          </>
        ) : (
          <></>
        )}
      </View>

      <View style={FilterListCss.CarFil}>
        {showCarFil ? (
          <>
            <CarFil
              onPress={() => {
                setShowCarFil(false);
              }}
            />
          </>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default FilterList;