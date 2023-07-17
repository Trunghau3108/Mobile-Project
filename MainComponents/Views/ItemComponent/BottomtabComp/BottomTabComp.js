import { Dimensions, StyleSheet, Text, View, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import FindCarFilter from "../FindCarFilter/FindCarFilter";

import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const BottomTabComp = (props) => {
  const navigation = useNavigation();
  const colorHome = props.color1;
  const colorHistory = props.color2;
  const colorSearch = props.color3;
  const colorSupport = props.color4;
  const colorProfile = props.color5;

  return (
    <View style={styles.bottomTab}>
      <BottomTabItem
        gettabColor={colorHome}
        icon="home"
        name="Home"
        onPress={() => {
          navigation.navigate('TabHome');
        }}
      />

      <BottomTabItem
        gettabColor={colorHistory}
        icon="history"
        name="History"
        onPress={() => {
          navigation.navigate('History');
        }}
      />

      <TouchableOpacity
        style={{
          color: {colorSearch},
          backgroundColor: "#87CEEB",
          width: (width * 20) / 100,
          height: (height * 8) / 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <FontAwesome name="search" size={35} color={colorSearch} />
      </TouchableOpacity>

      <BottomTabItem
        gettabColor={colorSupport}
        icon="question"
        name="Support"
        onPress={() => {
          navigation.navigate('Support');
        }}
      />

      <BottomTabItem
        gettabColor={colorProfile}
        icon="user"
        name="Profile"
        onPress={() => {
          navigation.navigate('MainPro');
        }}
      />
    </View>
  );
};

const BottomTabItem = (props) => {
  return (
    <TouchableOpacity
      style={[styles.tab, { color: props.gettabColor }]}
      onPress={props.onPress}
    >
      <FontAwesome name={props.icon} size={24} color={props.gettabColor} />
      <Text style={{ fontSize: 13, color: props.gettabColor }}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default BottomTabComp;

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: "#87CEEB",
    width: width,
    height: (height * 8) / 100,
    flexDirection: "row",
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    width: (width * 20) / 100,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});