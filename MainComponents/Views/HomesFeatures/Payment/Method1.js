import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from "react-native";
import React, { useState } from "react";

import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
const Method1 = () => {


  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [showScrollView, setShowScrollView] = useState(false);

  const handleSelection1 = () => {
        setSelection1(!isSelected1);
        setShowScrollView(false)
        setSelection2(false);
  }
  const handleSelection2 = () => {
        setSelection2(!isSelected2);
        setShowScrollView(!showScrollView);
        setSelection1(false)
  };
  return (
    <View style = {{marginLeft:10,marginBottom:15}}>
      <TouchableOpacity
        style={[
          styles.linkTouch,
          { flexDirection: "row", alignItems: "center", marginTop: 30 },
        ]}
        onPress={handleSelection1}
      >
        {isSelected1 ? (
          <AntDesign name="checksquareo" size={30} color="#146C94" />
        ) : (
          <Feather name="square" size={30} color="gray" />
        )}
        <Text style={[styles.text, { fontSize:15, marginLeft: 5 }]}>
          Thanh Toán Tiền Mặt
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.linkTouch,
          { flexDirection: "row", alignItems: "center", marginTop: 10 },
        ]}
        onPress={handleSelection2}
      >
        {isSelected2 ? (
          <AntDesign name="checksquareo" size={30} color="#146C94" />
        ) : (
          <Feather name="square" size={30} color="gray" />
        )}
        <Text style={[styles.text, { fontSize: 15, marginLeft: 5 }]}>
          Thanh Toán Online
        </Text>
      </TouchableOpacity>
      {showScrollView && (
        <View style = {styles.ViDienTu}>
            <Text style ={{marginLeft:20,fontWeight:'bold',fontSize:15}}>Ví Điện Tử</Text>
            <ScrollView style = {styles.row1} horizontal = {true} showsHorizontalScrollIndicator ={false}>
                <TouchableOpacity style = {styles.Vi1}>
                    <Image
                      source={require('../../../../assets/MoMo_Logo.png')}
                      style = {styles.imgNganHang} 
                    />
                    <Text style={styles.textNganHang}>MOMO</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Vi1}>
                <Image
                      source={require('../../../../assets/zalopay.webp')}
                      style = {styles.imgNganHang} 
                    />
                    <Text style={styles.textNganHang}>ZaloPay</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Vi1}>
                <Image
                      source={require('../../../../assets/vnpay.png')}
                      style = {styles.imgNganHang} 
                    />
                    <Text style={styles.textNganHang}>VNPay</Text>
                </TouchableOpacity>
            </ScrollView>
            <Text style ={{marginLeft:20,fontWeight:'bold',fontSize:15}}>Ngân Hàng</Text>
            <ScrollView style = {styles.row2} horizontal = {true} showsHorizontalScrollIndicator ={false}>
                <TouchableOpacity style = {styles.Vi1}>
                    <Image
                      source={require('../../../../assets/shinhan.jpg')}
                      style = {styles.imgNganHang} 
                    />
                    <Text style={styles.textNganHang}>Shinhan</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Vi1}>
                <Image
                      source={require('../../../../assets/tpbank.png')}
                      style = {styles.imgNganHang} 
                    />
                    <Text style={styles.textNganHang}>TPBank</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Vi1}>
                <Image
                      source={require('../../../../assets/vietcombank.jpg')}
                      style = {styles.imgNganHang} 
                    />
                    <Text style={styles.textNganHang}>VCB</Text>
                </TouchableOpacity>
            </ScrollView>
      </View>
      
      )}
    </View>
  );
};

export default Method1;

const styles = StyleSheet.create({
  text: {
    color: "#146C94",
  },
  linkTouch: {
    width: (width * 40) / 100,
  },
  ViDienTu:{
    marginTop:10,
    width:width,
    height:height*30/100,
    // backgroundColor:'red'
  },
  row1:{
    height:height*10/100,
    width:width,
    // backgroundColor:'blue',
    flexDirection:'row',
    marginTop:10
  },
  row2:{
    height:height*10/100,
    width:width,
    // backgroundColor:'yellow',
    flexDirection:'row',
    marginTop:10
  },
  Vi1:{
    borderColor:'#D8D5D6',
    borderWidth:2.5,
    borderRadius:7,
    // backgroundColor:'green',
    height:height*9/100,
    width:width*35/100,
    marginLeft:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  textNganHang:{
    fontWeight:'bold',marginRight:10
  },
  imgNganHang:{
    height:50,width:50,marginRight:10
  },

});
