import React, { useState,} from "react";
import CalendarItemCss from "./CalendarItemCss";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import FindCarFilter from "../FindCarFilter/FindCarFilter";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";

const CalendarItem = ({ onRentCarSelect, onReturnCarSelect }) => {
  const [isRentDatePickerVisible, setRentDatePickerVisibility] =
    useState(false);
  const [isReturnDatePickerVisible, setReturnDatePickerVisibility] =
    useState(false);
  const [rentCar, setRentCar] = useState("Ngày nhận...");
  const [returnCar, setReturnCar] = useState("Ngày trả...");

  const [minimumDate, setMinimumDate] = useState(new Date());

  const showRentDatePicker = () => {
    setRentDatePickerVisibility(true);
    setReturnCar("Ngày trả...");
  };

  const hideRentDatePicker = () => {
    setRentDatePickerVisibility(false);
  };

  const showReturnDatePicker = () => {
    if (rentCar !== "Ngày nhận...") {
      setReturnDatePickerVisibility(true);
    } else {
      Alert.alert("Thông báo", "Vui lòng chọn ngày thuê xe");
    }
  };

  const hideReturnDatePicker = () => {
    setReturnDatePickerVisibility(false);
  };

  const handleConfirmRentCar = (date,) => {
    let currentDateRent = new Date(date);
    let formattedDateTimeRent = moment
      .utc(currentDateRent)
      .local()
      .format("DD/MM/YYYY HH:mm");

    setRentCar(formattedDateTimeRent);
    let minDate = new Date(currentDateRent);
    minDate.setDate(minDate.getDate() + 1);
    setMinimumDate(minDate);
    hideRentDatePicker();

    onRentCarSelect(formattedDateTimeRent);
    // onRentCarSelect(formattedDateTimeRent);
  };

  const handleConfirmReturnCar = (date) => {
    let currentDateReturn = new Date(date);
    let formattedDateTimeReturn = moment
      .utc(currentDateReturn)
      .local()
      .format("DD/MM/YYYY HH:mm");

    setReturnCar(formattedDateTimeReturn);
    hideReturnDatePicker();
    onReturnCarSelect(formattedDateTimeReturn);
  };

  return (
    <>
      <View style={CalendarItemCss.container}>
        <TouchableOpacity
          onPress={
            showRentDatePicker}
          style={CalendarItemCss.button}
        >
          <Text style={CalendarItemCss.buttontext}>{rentCar}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          minimumDate={new Date()}
          isVisible={isRentDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirmRentCar}
          onCancel={hideRentDatePicker}
        />

        <TouchableOpacity
          onPress={showReturnDatePicker}
          style={CalendarItemCss.button}
        >
          <Text style={CalendarItemCss.buttontext}>{returnCar}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          minimumDate={minimumDate}
          isVisible={isReturnDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirmReturnCar}
          onCancel={hideReturnDatePicker}
        />
      </View>
    </>
  );
};

export default CalendarItem;