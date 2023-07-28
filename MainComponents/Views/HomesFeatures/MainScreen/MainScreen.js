import React, { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import MainScreenCss from './MainScreenCss'
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';
import { FontAwesome } from '@expo/vector-icons';
import DataPost from '../../../VisualData/DataPost';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FindCarFilter from '../../ItemComponent/FindCarFilter/FindCarFilter';
import url from '../../../../urlAPI';
import axios from 'axios';

const { width, height } = Dimensions.get('screen');

const MainScreen = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const [data, setData] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [load, setLoad] = useState(true);

  const retrieveUserInfo = async () => {
    try {
      // Lấy dữ liệu từ AsyncStorage dưới dạng chuỗi JSON
      const jsonString = await AsyncStorage.getItem('user');

      if (jsonString) {
        // Chuyển chuỗi JSON thành đối tượng
        const userData = JSON.parse(jsonString);

        // Cập nhật state để hiển thị lên view
        setUserInfo(userData);
      } else {
        // Không tìm thấy dữ liệu trong AsyncStorage
        console.log('User data not found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving user data from AsyncStorage:', error);
    }
  };

  const getData = async () => {
    let res = await axios.post(url + "/api/products/GetListProduct");
    const sortedData = res.data.sort((a, b) => b.views - a.views);
    const top5Data = sortedData.slice(0, 5);
    setData(top5Data);
    setLoad(false);
  }

  const getSupplier = async () => {
    setLoad(true);
    let res = await axios.post(url + "/api/Supplier/GetListSuppliers");
    setSupplier(res.data);
    setLoad(false);
  }

  const formatUnitPrice = (unitPrice) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return formatter.format(unitPrice);
  }

  useEffect(() => {
    getData();
    getSupplier();
  }, []);
  return (
    <SafeAreaView style={MainScreenCss.FullScreen} showsHorizontalScrollIndicator={false}>

      <View style={MainScreenCss.Header}>
        {userInfo ? (
          <>
            <Image
              source={require('../../../../assets/LoginFeaturesImg/logoApp.png')}
              style={{ height: '100%', width: '40%' }}
            />

            <TouchableOpacity style={MainScreenCss.TextLogin} onPress={() => { navigation.navigate('Signin') }}>
              <Text style={{ fontSize: 20, alignSelf: "center", marginRight: 10 }}>Đăng nhập /  </Text>
              <FontAwesome name="user-circle-o" size={30} color="black" />
            </TouchableOpacity>

          </>
        ) : (
          <>
            <Image
              source={require('../../../../assets/LoginFeaturesImg/logoApp.png')}
              style={{ height: '100%', width: '40%' }}
            />

            <TouchableOpacity style={MainScreenCss.TextLogin} onPress={() => { navigation.navigate('MainPro') }}>
              <Text style={{ fontSize: 20, alignSelf: "center", marginRight: 10 }}>Đăng nhập / </Text>
              <FontAwesome name="user-circle-o" size={30} color="black" />
            </TouchableOpacity>

          </>
        )}
      </View>
      <FindCarFilter />
      <ScrollView style={MainScreenCss.Body}>
        <View style={MainScreenCss.Popular}>
          <Text style={{ paddingBottom: 10, fontWeight: 700 }}>Các loại xe phổ biến tại CFA</Text>
          {load ? (
            <ActivityIndicator size="large" />
          )
            :
            (
              <FlatList
                horizontal
                style={{ cursor: 'pointer' }}
                data={data}
                renderItem={({ item }) =>
                  <PostItem
                    promote={item.discount}
                    name={item.name}
                    price={formatUnitPrice(item.unitPrice)}
                    distance={item.automotives.length > 0 ? item.automotives[0]?.location : 'Không xa'}
                    imguri={item.image}
                  />
                }
              />
            )
          }
        </View>
        <View style={MainScreenCss.BodyItem}>
          <View style={MainScreenCss.Rent}>
            <Text style={{ fontWeight: 700 }}>Thuê xe như thế nào</Text>

            <View style={MainScreenCss.RentItem}>
              <Image
                source={require('./../../../../assets/Home/DatXe.png')}
                style={{ height: '40%', width: '20%' }}
              />
              <Text style={{ fontWeight: 700, paddingBottom: 5, fontSize: 20 }}>1 - Đặt xe trên ứng dụng</Text>
              <Text style={{ width: 250, marginLeft: 25, textAlign: 'center' }}>Nhanh chóng đặt một chiếc xe ưng ý thông qua ứng dụng của chúng tôi.</Text>
            </View>

            <View style={MainScreenCss.RentItem}>
              <Image
                source={require('./../../../../assets/Home/NhanXe.png')}
                style={{ height: '40%', width: '45%' }}
              />
              <Text style={{ fontWeight: 700, paddingBottom: 5, fontSize: 20 }}>2 - Nhận xe</Text>
              <Text style={{ width: 250, marginLeft: 25, textAlign: 'center' }}>Nhận xe tại nhà hoặc tại các đại lý trong khu vực của chúng tôi.</Text>
            </View>

            <View style={MainScreenCss.RentItem}>
              <Image
                source={require('./../../../../assets/Home/TanHuong.png')}
                style={{ height: '40%', width: '40%' }}
              />
              <Text style={{ fontWeight: 700, paddingBottom: 5, fontSize: 20 }}>3 - Tận hưởng</Text>
              <Text style={{ width: 250, marginLeft: 25, textAlign: 'center' }}>Sau khi hoàn tất thủ tục, bạn chỉ cần nhận xe và lên đường. Tất cả các phương tiện của chúng tôi đều đạt chuẩn an toàn.</Text>
            </View>
          </View>
          <View style={MainScreenCss.Partner}>
            <Text style={{ paddingBottom: 10, fontWeight: 700, fontSize: 16 }}>Các đối tác với chúng tôi</Text>
            <FlatList
              horizontal
              style={{ height: height * 10 / 100 }}
              data={supplier}
              renderItem={({ item }) =>
                <Image
                  source={{
                    uri: item.logo
                  }}
                  style={MainScreenCss.logoCar}
                />
              }
            />
          </View>
        </View>
      </ScrollView>
      <BottomTabComp color1="#146C94" />
    </SafeAreaView>
  )
}

const PostItem = (props) => {
  const navigation = useNavigation();
  const promotion = props.promote * 100;
  return (
    <TouchableOpacity
      style={MainScreenCss.PopularPost}
      onPress={() => { navigation.navigate("CarDetail") }}
    >
      <View style={MainScreenCss.promotionView}>
        <Text style={MainScreenCss.promotionText}>giảm giá {promotion} %</Text>
      </View>
      <View style={MainScreenCss.PopularItem}>
        <View style={MainScreenCss.PopularViewInfo}>
          <View>
            <Text style={MainScreenCss.nameText} numberOfLines={1}>{props.name}</Text>
            <Text style={MainScreenCss.priceText}>Giá:
              <Text style={[MainScreenCss.priceText, { fontSize: 18, color: 'gray', }]} numberOfLines={1}> {props.price}</Text>
            </Text>
            <Text style={MainScreenCss.priceText}>đ / ngày</Text>
            <TouchableOpacity
              style={MainScreenCss.distanceTouch}
              onPress={() => { navigation.navigate("Map") }}
            >
              <Text style={MainScreenCss.distanceText}>{props.distance} km</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={MainScreenCss.PopularViewImg}
          source={{ uri: props.imguri }}
          si
        />
      </View>
    </TouchableOpacity>
  )
}


export default MainScreen
