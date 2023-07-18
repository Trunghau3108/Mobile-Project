import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function SortPrice() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.background}>
          <Text style={styles.title}>Sắp xếp theo thứ tự</Text>
          <View style={styles.down}>
            <Icon name="arrow-down" size={20} style={styles.arrow} />
            <Text>Giá từ thấp đến cao</Text>
          </View>
          <View style={styles.up}>
            <Icon name="arrow-up" size={20} style={styles.arrow} />
            <Text>Giá từ cao đến thấp</Text>
          </View>
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
