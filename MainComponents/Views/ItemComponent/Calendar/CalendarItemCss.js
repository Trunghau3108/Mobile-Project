import { StyleSheet } from "react-native";

const CalendarItemCss = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  FilterList: {
    display: "none",
  },
  button: {
    backgroundColor: "#ececec",
    width: 160,
    padding: 15,
    borderRadius: 5,
    alignItems: "flex-start",
  },
  buttontext: {
    fontWeight: "500",
    fontSize: 12,
  },
});

export default CalendarItemCss;
