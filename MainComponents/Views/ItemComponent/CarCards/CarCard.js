import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import CarCardCss from "./CarCardCss";

const CarCard = (props) => {
  return (
    <View style={CarCardCss.cardView}>
      <Image source={{ uri: props.imguri }} style={CarCardCss.img} />
      <View style={CarCardCss.textView}>
        <Text style={CarCardCss.text}>{props.tenxe}</Text>
        <Text style={CarCardCss.text}>
          {props.gia} đ
          <Text style={{ color: "gray", fontSize: 15, fontWeight: "normal" }}>
            / Ngày
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={CarCardCss.touch}>
        <Text style={{ color: "white", fontSize: 17 }}>Chi tiết {">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CarCard;
