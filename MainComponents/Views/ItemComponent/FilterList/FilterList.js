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
import url from "../../../../urlAPI";
import axios from "axios";

const FilterList = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isLoaiXe, setIsLoaiXe] = useState('...');
  const [isKieuXe, setIsKieuXe] = useState('...');
  const [isHang, setIsHang] = useState('...');
  const [showCarFil, setShowCarFil] = useState(false);
  const [showSortPrice, setShowSortPrice] = useState(false);

  const [price, setPrice] = useState("none...");

  const handleLoaiXeChange = (loaixe) => {
    setIsLoaiXe(loaixe);
  };

  const handleKieuXeChange = (kieuxe) => {
    setIsKieuXe(kieuxe);
  };

  const handleHangChange = (hang) => {
    setIsHang(hang);
  };
  useEffect(() => {
    props.onFilterChange(isLoaiXe, isKieuXe, isHang);
  }, [isLoaiXe, isKieuXe, isHang]);

  return (
    <>
      <SafeAreaView />
      <View style={FilterListCss.container}>
        <View style={FilterListCss.ltnhourctn}>
          <Ionicons name="ios-location-outline" size={35} color="black" />
          <View style={FilterListCss.ltnhour}>
            <Text style={FilterListCss.ltn}>{props.where}</Text>

            <Text style={FilterListCss.hour}>{props.rentcar}</Text>

            <Text style={FilterListCss.hour}>{props.returncar}</Text>
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
          <Text>{isLoaiXe},{isKieuXe},{isHang}</Text>
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

          <TouchableOpacity style={FilterListCss.prcbtnctn} onPress={props.onPressLoc}>
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
                props.funcUp();
              }}
              onPressDown={() => {
                setShowSortPrice(false);
                setPrice("Giá từ thấp đến cao");
                props.funcDown();
              }}
              style={FilterListCss.SortPrice}
            />
          </>
        ) : (
          <></>
        )}
      </View>

      {showCarFil ? (
        <View style={FilterListCss.CarFil}>
          <CarFil
            onPress={() => {
              setShowCarFil(false);
            }}
            isLoaiXe={isLoaiXe}
            isKieuXe={isKieuXe}
            isHang={isHang}
            onLoaiXeChange={handleLoaiXeChange}
            onKieuXeChange={handleKieuXeChange}
            onHangChange={handleHangChange}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default FilterList;
