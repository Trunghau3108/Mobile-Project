import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("screen");

const BottomTabComp = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const getTabColor = (tab) => {
    return selectedTab === tab ? "#146C94" : "gray";
  };

  const makeColor = (tab) => {
    if (selectedTab === tab) {
      setSelectedTab("none");
    } else {
      setSelectedTab(tab);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomTab}>
        {/* Home */}
        <TouchableOpacity
          style={[styles.tab, { color: getTabColor("home") }]}
          onPress={() => makeColor("home")}
        >
          <FontAwesome name="home" size={24} color={getTabColor("home")} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        {/* History */}
        <TouchableOpacity
          style={[
            styles.tab,
            { borderLeftWidth: 1, borderColor: "gray", color: getTabColor("history") },
          ]}
          onPress={() => makeColor("history")}
        >
          <FontAwesome name="history" size={24} color={getTabColor("history")} />
          <Text style={styles.text}>History</Text>
        </TouchableOpacity>

        {/* Support */}
        <TouchableOpacity
          style={[
            styles.tab,
            { borderLeftWidth: 1, borderColor: "gray", color: getTabColor("support") },
          ]}
          onPress={() => makeColor("support")}
        >
          <FontAwesome name="question" size={24} color={getTabColor("support")} />
          <Text style={styles.text}>Support</Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          style={[
            styles.tab,
            { borderLeftWidth: 1, borderColor: "gray", color: getTabColor("profile") },
          ]}
          onPress={() => makeColor("profile")}
        >
          <FontAwesome name="user" size={24} color={getTabColor("profile")} />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabComp;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
  },
  bottomTab: {
    backgroundColor: "#87CEEB",
    width: (width * 80) / 100,
    height: (height * 6) / 100,
    borderRadius: 20,
    flexDirection: "row",
  },
  tab: {
    width: (width * 20) / 100,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 13,
  },
});
