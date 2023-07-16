import React, { useState, useEffect } from "react";
// import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars";
import CalendarItemCss from "./CalendarItemCss";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";
import moment from "moment";

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";

const CalendarItem = () => {
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

  const handleConfirmRentCar = (date) => {
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
  };

  const handleConfirmReturnCar = (date) => {
    let currentDateReturn = new Date(date);
    let formattedDateTimeReturn = moment
      .utc(currentDateReturn)
      .local()
      .format("DD/MM/YYYY HH:mm");

    setReturnCar(formattedDateTimeReturn);
    // console.log(formattedDateTimeReturn);
    hideReturnDatePicker();
  };

  return (
    <>
      <View style={CalendarItemCss.container}>
        <TouchableOpacity
          onPress={showRentDatePicker}
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

// let fDate =
//   formattedDateTime.getUTCDate() +
//   "/" +
//   (formattedDateTime.getUTCMonth() + 1) +
//   "/" +
//   formattedDateTime.getUTCFullYear();
// let hour = formattedDateTime.getHours().toString().padStart(2, "0");
// let minutes = formattedDateTime.getMinutes().toString().padStart(2, "0");
// setText(fDate + " " + hour + ":" + minutes);

//VN calendar

// LocaleConfig.locales["vni"] = {
//   monthNames: [
//     "Tháng 1",
//     "Tháng 2",
//     "Tháng 3",
//     "Tháng 4",
//     "Tháng 5",
//     "Tháng 6",
//     "Tháng 7",
//     "Tháng 8",
//     "Tháng 9",
//     "Tháng 10",
//     "Tháng 11",
//     "Tháng 12",
//   ],
//   monthNamesShort: [
//     "Tháng 1",
//     "Tháng 2",
//     "Tháng 3",
//     "Tháng 4",
//     "Tháng 5",
//     "Tháng 6",
//     "Tháng 7",
//     "Tháng 8",
//     "Tháng 9",
//     "Tháng 10",
//     "Tháng 11",
//     "Tháng 12",
//   ],
//   dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
//   dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
//   today: "Hôm nay",
// };
// LocaleConfig.defaultLocale = "vni";

//DateTimePicker

// const [date, setDate] = useState(new Date());
// const [mode, setMode] = useState("date");
// const [show, setShow] = useState(false);
// const showMode = (currentMode) => {
//   setShow(true);
//   setMode(currentMode);
// };
// const onChange = (event, selectedDate) => {
//   const currentDate = selectedDate || date;
//   setDate(currentDate);
//   setShow(true);
//   let tempDate = new Date(currentDate);
//   let fDate =
//     tempDate.getDate() +
//     "/" +
//     (tempDate.getMonth() + 1) +
//     "/" +
//     tempDate.getFullYear();
//   let fTime =
//     "Hours: " + tempDate.getHours() + "| Minutes: " + tempDate.getMinutes();

//   setText(fDate + fTime);

//   console.log(fDate + fTime);
// };

// <View>
//   <Text>{text}</Text>
//   <View>
//     <Button title="DatePicker" onPress={() => showMode("date")}></Button>
//   </View>

//   {show && (
//     <DateTimePicker
//       testID="dateTimePicker"
//       value={date}
//       mode={mode}
//       is24Hour={true}
//       display="calendar"
//       onChange={onChange}
//     />
//   )}
// </View>

//DatePicker

{
  /* <Text style={CalendarItemCss.title}>Chọn thời gian đặt xe</Text>

        <Calendar
          theme={{
            textDayFontSize: 15,
            textMonthFontSize: 20,
            arrowColor: "black",
          }}
          style={CalendarItemCss.calendar}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
            },
          }}
        />
        <TouchableOpacity style={CalendarItemCss.button}>
          <Text style={CalendarItemCss.textbutton}> XÁC NHẬN </Text>
        </TouchableOpacity> */
}
