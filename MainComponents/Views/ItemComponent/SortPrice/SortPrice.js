import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function SortPrice(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.background}>
          <Text style={styles.title}>Sắp xếp theo thứ tự</Text>
          <TouchableOpacity style={styles.down} onPress={props.onPressDown}>
            <Icon name="arrow-down" size={20} style={styles.arrow} />
            <Text>Giá từ thấp đến cao</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.up} onPress={props.onPressUp}>
            <Icon name="arrow-up" size={20} style={styles.arrow} />
            <Text>Giá từ cao đến thấp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default SortPrice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 20,
  },
  background: {
    backgroundColor: "white",
    padding: 40,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  down: {
    padding: 15,
    flexDirection: "row",
    borderTopWidth: 1,
  },
  up: {
    padding: 15,
    flexDirection: "row",
    borderTopWidth: 1,
  },
  arrow: {
    marginRight: 15,
  },
});
