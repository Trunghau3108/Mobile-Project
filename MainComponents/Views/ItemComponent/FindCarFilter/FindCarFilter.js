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
import React, { useState } from "react";
import {
  FontAwesome5,
  Fontisto,
  Octicons,
  Feather,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import CalendarItem from "../Calendar/CalendarItem";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import DataTinh from "../../../VisualData/DataListXe";

const FindCarFilter = (props) => {
  const navigation = useNavigation();
  const [rentCar, setRentCar] = useState('A123');
  const [returnCar, setReturnCar] = useState('B');
  const [whereCar, setWhereCar] = useState('');

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

  const handleFindCar = () => {
    console.log(whereCar, rentCar, returnCar);
  }

  return (
    <>
      <View style={styles.FindCarTong}>
        <View style={styles.ChonXe}>
          <TouchableOpacity style={styles.ChonOto} onPress={handleCarPress}>

            <FontAwesome5
              name="car"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 10 }}>Ô tô</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ChonMoTo} onPress={handleMotorPress}>
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
      </View>
    </>
  );
};

export default FindCarFilter;

const styles = StyleSheet.create({
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
});