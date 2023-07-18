import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomTabComp from "../../ItemComponent/BottomTabComp/BottomTabComp";
import Icon from "react-native-vector-icons/FontAwesome";

const Support = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.questioncontainer}>
          <View style={styles.question}>
            <Icon
              name="question"
              size={15}
              style={styles.questionmark}
              color={"white"}
            />
            <Text style={styles.titlequestion}>Hướng dẫn thuê xe</Text>
            <Icon name="chevron-right" style={styles.chevron} />
          </View>
          <View style={styles.question}>
            <Icon
              name="question"
              size={15}
              style={styles.questionmark}
              color={"white"}
            />
            <Text style={styles.titlequestion}>Câu hỏi thường gặp</Text>
            <Icon name="chevron-right" style={styles.chevron} />
          </View>
        </View>

        <View style={styles.contact}>
          <Text style={styles.contacttext}>Thông tin liên hệ</Text>
          <Text style={styles.direction}>
            69/68 Đặng Thùy Trâm, Phường 13, Quận Bình Thạnh
          </Text>
          <Text style={styles.direction}>
            233A Phan Văn Trị, Quận Bình Thạnh
          </Text>
          <Text style={styles.direction}>45 Nguyễn Khắc Nhu, Quận 1</Text>

          <View style={styles.mail}>
            <Icon name="envelope" size={22} color={"#146C94"} />
            <Text style={styles.mailphonetext}>contact@cfa.vn</Text>
          </View>
          <View style={styles.phone}>
            <Icon name="phone" size={22} color={"#146C94"} />
            <Text style={styles.mailphonetext}>0934.33.44.23</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
  },

  questioncontainer: {
    marginBottom: 18,
  },
  titlequestion: {
    fontSize: 17,
    fontWeight: "400",
  },

  chevron: {
    position: "absolute",
    right: 0,
    marginRight: 15,
  },
  questionmark: {
    borderWidth: 2,
    borderRadius: 4,
    paddingBottom: 0,
    paddingLeft: 6,
    paddingRight: 3,
    paddingTop: 3,
    margin: 15,
    backgroundColor: "#146C94",
    borderColor: "#146C94",
  },
  question: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#d9d9d9",
  },
  contact: {
    marginLeft: 25,
    marginRight: 25,
    height: 290,
    padding: 22,
    backgroundColor: "white",
    borderRadius: 5,
  },
  mail: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 30,
  },
  phone: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mailphonetext: {
    fontSize: 16,
    fontWeight: "300",
    marginLeft: 15,
  },
  contacttext: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  direction: {
    marginBottom: 10,
  },
});
