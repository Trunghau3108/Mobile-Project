import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import BottomTabComp from "../../ItemComponent/BottomtabComp/BottomTabComp";
import Icon from "react-native-vector-icons/FontAwesome";
import ModalCss from "./ModalCss";
import { LinearGradient } from "expo-linear-gradient";

const Support = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <ModalItem
          visible={modalVisible}
          onPress={() => {
            setModalVisible(false);
          }}
        />
        <View style={styles.questioncontainer}>
          <ItemComp
            text="Hướng dẫn thuê xe"
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <ItemComp
            text="Hợp đồng thuê xe tự lái"
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <ItemComp
            text="Cẩm nang thuê xe tự lái"
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <ItemComp
            text="Câu hỏi thường gặp"
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <ItemComp
            text="CarRental blog"
            onPress={() => {
              setModalVisible(true);
            }}
          />
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
        <BottomTabComp color4="#146C94" />
      </View>
    </>
  );
};

const ItemComp = (props) => {
  return (
    <TouchableOpacity style={styles.question} onPress={props.onPress}>
      <Icon
        name="question"
        size={15}
        style={styles.questionmark}
        color={"white"}
      />
      <Text style={styles.titlequestion}>{props.text}</Text>
      <Icon name="chevron-right" style={styles.chevron} />
    </TouchableOpacity>
  );
};

const ModalItem = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={ModalCss.modalView}>
        <View style={ModalCss.modal}>
          <View style={ModalCss.titleView}>
            <Text style={ModalCss.title}>Hướng dẫn thuê xe</Text>
          </View>
          <ImageBackground
            source={require("../../../../assets/Support.jpg")}
            style={ModalCss.imgView}
          >
            <Text style={ModalCss.imgText}>HỖ TRỢ</Text>
          </ImageBackground>
          <ScrollView style={ModalCss.bodyView}>
            <ItemComp text="Tôi cần chuẩn bị gì để thuê xe?" />
            <ItemComp text="Tôi có thể thuê cho người khác?" />
            <ItemComp text="Những điều lưu ý" />
            <ItemComp text="Cần làm gì khi có sự cố?" />
            <ItemComp text="Giá thuê xe gồm những phí gì?" />
            <ItemComp text="Bạn có những loại xe nào ?" />
            <ItemComp text="Các hình thức thanh toán?" />
            <ItemComp text="Xe có mới không?" />
            <ItemComp text="Chất lượng tốt không?" />
          </ScrollView>
          <View style={ModalCss.bottomView}>
            <LinearGradient
              colors={["#156791", "#209ddd", "#2498ff"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={ModalCss.touchDong}
            >
              <TouchableOpacity
                style={ModalCss.touchDong}
                onPress={props.onPress}
              >
                <Text style={ModalCss.touchText}>Đóng</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#d9d9d9",
  },
  contact: {
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
