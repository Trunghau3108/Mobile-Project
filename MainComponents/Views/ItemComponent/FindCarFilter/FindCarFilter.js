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
  const [whereCar, setWhereCar] = useState('');
  const handleRentCarSelection = (selectedRentCar) => {
    setSelectedRentCar(selectedRentCar);
    // storeData("rentcar", selectedRentCar);
  };

  const handleReturnCarSelection = (selectedReturnCar) => {
    setSelectedReturnCar(selectedReturnCar);
    // storeData("return", selectedReturnCar);
  };

  const handleFilterPress = () => {
    navigation.navigate("FilterList", {
      selectedRentCar: selectedRentCar,
      selectedReturnCar: selectedReturnCar,
    });
  };

// import { useNavigation } from "@react-navigation/native";


// const FindCarFilter = (props) => {
  // const navigation = useNavigation();
  // const [rentCar, setRentCar] = useState('A123');
  // const [returnCar, setReturnCar] = useState('B');
  

  // const [isCarSelected, setCarSelected] = useState(false);
  // const [isMotorSelected, setMotorSelected] = useState(false);
  // const handleCarPress = () => {
  //   setCarSelected(!isCarSelected);
  //   setMotorSelected(false);
  // };
  // const handleMotorPress = () => {
  //   setMotorSelected(!isMotorSelected);
  //   setCarSelected(false);
  // };

  // const handleFindCar = () => {
  //   console.log(whereCar, rentCar, returnCar);
  // }

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
        {/* <TouchableOpacity style={styles.ChonDiaDiem}>
          <Octicons
            name="location"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <Text style={{ marginLeft: 10 }}>Hà Nội</Text>
          <View style={{ marginLeft: 250 }}>
            <Entypo name="chevron-down" size={24} color="black" />
          </View>
        </TouchableOpacity> */}
        <View>
          <CalendarItem
            onRentCarSelect={handleRentCarSelection}
            onReturnCarSelect={handleReturnCarSelection}
          />
        </View>
        {/* <View style={styles.FilterList}>
          <FilterList selectedRentCar={selectedRentCar} />
        </View> */}
        <TouchableOpacity
          style={styles.FindCarButton}
          onPress={handleFilterPress}>
            <Text style={{ marginLeft: 10 }}>Xe máy</Text>
          </TouchableOpacity>
        </View>

        <SelectDropdown
          buttonStyle={styles.ChonDiaDiem}
          data={DataTinh}
          onSelect={(selectItem, index) => { setWhereCar(selectItem), console.log(whereCar) }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => { return item }}
        />
        <Feather name="map-pin" size={24} color="black"  style={{position: 'absolute', top: '36%', left: '5%'}}/>
        <AntDesign name="down" size={20} color="black" style={{position: 'absolute', top: '37%', right: '5%'}}/>

        <View>
          <CalendarItem
          />
        </View>
        <TouchableOpacity
          style={styles.FindCarButton}
          onPress={() => {
            navigation.navigate('Home', {
              rentCar: rentCar,
              returnCar: returnCar,
              whereCar: whereCar,
            }),
            handleFindCar()
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Tìm xe ngay
          </Text>
        </TouchableOpacity>
      
    </>
  );
};

export default FindCarFilter;

const styles = StyleSheet.create({
  FilterList: {
    display: "none",
  },

  FindCarTong: {
    paddingTop: 10,
    height: "33%",
    backgroundColor: 'white'
  },
  ChonXe: {
    height: 60,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ChonDiaDiem: {
    width: '95%',
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
