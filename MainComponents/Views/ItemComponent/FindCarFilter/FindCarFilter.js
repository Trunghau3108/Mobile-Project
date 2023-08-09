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
import React, { useEffect, useState } from "react";
import {
  FontAwesome5,
  Fontisto,
  Octicons,
  Feather,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import CalendarItem from "../Calendar/CalendarItem";
import FilterList from "../FilterList/FilterList";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import DataTinh from "../../../VisualData/DataListXe";
// import { getData, storeData } from "../../../../AsyncStorage";

const FindCarFilter = () => {
  const navigation = useNavigation();
  const [isCarSelected, setCarSelected] = useState(false);
  const [isMotorSelected, setMotorSelected] = useState(false);
  const handleCarPress = () => {
    setCarSelected(!isCarSelected);
    setMotorSelected(false);
  };
  const handleMotorPress = () => {
    setMotorSelected(!isMotorSelected);
    setCarSelected(false);
  };

  const [selectedRentCar, setSelectedRentCar] = useState("");
  const [selectedReturnCar, setSelectedReturnCar] = useState("");
  const [whereCar, setWhereCar] = useState("");
  const handleRentCarSelection = (selectedRentCar) => {
    setSelectedRentCar(selectedRentCar);
  };

  const handleReturnCarSelection = (selectedReturnCar) => {
    setSelectedReturnCar(selectedReturnCar);
  };

  const handleFilterPress = () => {
    navigation.navigate("Home", {
      selectedRentCar: selectedRentCar,
      selectedReturnCar: selectedReturnCar,
      whereCar: whereCar,
    });
  };

  return (
    <>
      <View style={styles.FindCarTong}>
        <View style={styles.ChonXe}>
          <TouchableOpacity
            style={[styles.ChonOto, isCarSelected && styles.ChonOtoSelected]}
            onPress={handleCarPress}
          >
            <FontAwesome5
              name="car"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <Text style={[{ marginLeft: 10 }]}>Ô tô</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.ChonOto, isMotorSelected && styles.ChonOtoSelected]}
            onPress={handleMotorPress}
          >
            <Fontisto
              name="motorcycle"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />

            <Text style={{ marginLeft: 10 }}>Xe máy</Text>
          </TouchableOpacity>
        </View>

        <SelectDropdown
          buttonStyle={styles.ChonDiaDiem}
          
          data={DataTinh}
          onSelect={(selectItem, index) => {
            setWhereCar(selectItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <Feather
          name="map-pin"
          size={24}
          color="black"
          style={{ position: "absolute", top: "30%", left: "5%" }}
        />
        <AntDesign
          name="down"
          size={20}
          color="black"
          style={{ position: "absolute", top: "32%", right: "5%" }}
        />
        <View>
          <CalendarItem
            onRentCarSelect={handleRentCarSelection}
            onReturnCarSelect={handleReturnCarSelection}
          />
        </View>
        <TouchableOpacity
          style={styles.FindCarButton}
          onPress={handleFilterPress}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Tìm xe ngay
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FindCarFilter;

const styles = StyleSheet.create({
  FindCarTong: {
    marginTop: 20,
    height: 270,

  },
  ChonXe: {
    height: 60,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ChonDiaDiem: {
    width: "95%",
    backgroundColor: "#ECECEC",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 5,
  },
  ChonTime: {
    height: 60,
    backgroundColor: "#ECECEC",
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  FindCarButton: {
    height: 60,
    backgroundColor: "yellow",
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#146C94",
  },
  ChonOto: {
    backgroundColor: "#ECECEC",
    width: "46%",
    marginRight: 10,
    height: 60,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  ChonMoTo: {
    backgroundColor: "#ECECEC",
    width: "46%",
    height: 60,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  ChonOtoSelected: {
    borderWidth: 2,
    borderColor: "#146C94",
  },
});
