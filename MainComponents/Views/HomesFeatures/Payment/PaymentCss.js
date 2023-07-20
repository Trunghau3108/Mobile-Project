import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    paymentTong: {
      height: height,
      width: width,
    },
    paymentInfo: {
      height: (height * 50) / 100,
      width: width,
    },
    paymentMethod: {
      width: width,
    },
    Coupon: {
      height: (height * 25) / 100,
      width: width,
    },
    CouponInput: {
      height: 50,
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 6,
      backgroundColor: "#EEFAFF",
      padding: 10,
      margin: 10,
      marginBottom: -10,
    },
    inputCoupon: {
      marginLeft: 10,
      color: "#146C94",
    },
    buttonConfirm: {
      position: "absolute",
      height: "7%",
      width: (width * 90) / 100,
      backgroundColor: "#146C94",
      top: "81%",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    goBack: {
      position: 'absolute',
      top: 20,
      left: 15,
    },
  });

  export default styles;