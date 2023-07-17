import React from "react";
import { Text, View } from "react-native";
import {
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import FilterListCss from "./FilterCss";
import { SafeAreaView } from "react-native-safe-area-context";

const ltn = "TP.Hồ Chí Minh";
const hour = "10:00 12/06/23";

const FilterList = () => {
  return (
    <>
      <SafeAreaView />
      <View style={FilterListCss.container}>
        <View style={FilterListCss.ltnhourctn}>
          <Ionicons name="ios-location-outline" size={35} color="black" />
          <View style={FilterListCss.ltnhour}>
            <Text style={FilterListCss.ltn}>{ltn}</Text>
            <Text style={FilterListCss.hour}>{hour}</Text>
            <Text style={FilterListCss.hour}>{hour}</Text>
          </View>
          <TouchableOpacity>
            <Text style={FilterListCss.changebtn}> THAY ĐỔI</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={FilterListCss.fltctn}>
          <Entypo name="list" size={25} color="black" />
          <Text>Ô tô, Kiểu xe, Hộp số, Chỗ ngồi...</Text>
          <Entypo name="chevron-down" size={25} color="black" />
        </TouchableOpacity>

        <View style={FilterListCss.prcctn}>
          <TouchableOpacity style={FilterListCss.prc}>
            <Entypo name="list" size={25} color="black" />
            <Text>Giá từ thấp đến cao</Text>
            <Entypo name="chevron-down" size={25} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={FilterListCss.prcbtnctn}>
            <Text style={FilterListCss.prcbtntext}>Lọc</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FilterList;
