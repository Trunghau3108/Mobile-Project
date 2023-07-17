import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, SafeAreaView } from 'react-native'
import React,{useEffect,useState} from 'react'
import MainScreenCss from './MainScreenCss'
import BottomTabComp from '../../ItemComponent/BottomtabComp/BottomTabComp';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('screen');

const MainScreen = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    // Lấy thông tin từ AsyncStorage khi component mount
    retrieveUserInfo();
  }, []);

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


  return (
    <SafeAreaView style={MainScreenCss.FullScreen} showsHorizontalScrollIndicator={false}>
      
      <View style={MainScreenCss.Header}>
      {userInfo ? (
        <>
        <Image
          source={require('../../../../assets/LoginFeaturesImg/logoApp.png')}
          style={{ height: '100%', width: '40%' }}
        />

              <TouchableOpacity style={MainScreenCss.TextLogin} onPress={() => { navigation.navigate('MainPro') }}>
                <Text style={{fontSize: 20, alignSelf: "center", marginRight: 10}}>{userInfo.email}</Text>
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
                <Text style={{fontSize: 20, alignSelf: "center", marginRight: 10}}>Đăng nhập / </Text>
                <FontAwesome name="user-circle-o" size={30} color="black" />
              </TouchableOpacity>

        </>
    )}
      </View>
      
      <ScrollView style={MainScreenCss.Body}>
        <View style={MainScreenCss.Popular}>
          <Text style={{ paddingBottom: 10, fontWeight: 700 }}>Các loại xe phổ biến tại CFA</Text>
          <ScrollView horizontal style={{ cursor: 'pointer' }}>
            <ImageBackground
              source={require('./../../../../assets/backgroundCar/cfg0W5.jpg')}
              style={{ marginRight: 20, width: 320, height: 200, borderRadius: 20, overflow: 'hidden' }}
            >

              <View style={MainScreenCss.textContainer}>
                <Image
                  source={require('./../../../../assets/imageIcon/iconCar.png')}
                  style={{ height: '100%', width: '15%', marginRight: 20 }}
                />
                <View style={MainScreenCss.leftTextContainer}>
                  <Text style={MainScreenCss.leftText}>Porsche</Text>
                  <Text style={MainScreenCss.leftText}>Berlint</Text>
                </View>
                <Image
                  source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                  style={{ height: '100%', width: '20%', marginRight: 20 }}
                />
                <View style={MainScreenCss.rightTextContainer}>
                  <Text style={MainScreenCss.rightText}>/Day</Text>
                  <Text style={MainScreenCss.rightText}>$$$$</Text>
                </View>
              </View>


            </ImageBackground>
            <ImageBackground
              source={require('./../../../../assets/backgroundCar/1454584-full-size-porsche-911-hd-wallpapers-1920x1080-windows.jpg')}
              style={{ marginRight: 20, width: 320, height: 200, borderRadius: 20, overflow: 'hidden' }}
            >
              <View style={MainScreenCss.textContainer}>
                <Image
                  source={require('./../../../../assets/imageIcon/iconCar.png')}
                  style={{ height: '100%', width: '15%', marginRight: 20 }}
                />
                <View style={MainScreenCss.leftTextContainer}>
                  <Text style={MainScreenCss.leftText}>Porsche</Text>
                  <Text style={MainScreenCss.leftText}>Berlint</Text>
                </View>
                <Image
                  source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                  style={{ height: '100%', width: '20%', marginRight: 20 }}
                />
                <View style={MainScreenCss.rightTextContainer}>
                  <Text style={MainScreenCss.rightText}>/Day</Text>
                  <Text style={MainScreenCss.rightText}>$$$$</Text>
                </View>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('./../../../../assets/backgroundCar/b6IjFi.jpg')}
              style={{ marginRight: 20, width: 320, height: 200, borderRadius: 20, overflow: 'hidden' }}
            >
              <View style={MainScreenCss.textContainer}>
                <Image
                  source={require('./../../../../assets/imageIcon/iconCar.png')}
                  style={{ height: '100%', width: '15%', marginRight: 20 }}
                />
                <View style={MainScreenCss.leftTextContainer}>
                  <Text style={MainScreenCss.leftText}>Porsche</Text>
                  <Text style={MainScreenCss.leftText}>Berlint</Text>
                </View>
                <Image
                  source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                  style={{ height: '100%', width: '20%', marginRight: 20 }}
                />
                <View style={MainScreenCss.rightTextContainer}>
                  <Text style={MainScreenCss.rightText}>/Day</Text>
                  <Text style={MainScreenCss.rightText}>$$$$</Text>
                </View>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('./../../../../assets/backgroundCar/porsche-rs-gt3-night-city-ie.jpg')}
              style={{ marginRight: 20, width: 320, height: 200, borderRadius: 20, overflow: 'hidden' }}
            >
              <View style={MainScreenCss.textContainer}>
                <Image
                  source={require('./../../../../assets/imageIcon/iconCar.png')}
                  style={{ height: '100%', width: '15%', marginRight: 20 }}
                />
                <View style={MainScreenCss.leftTextContainer}>
                  <Text style={MainScreenCss.leftText}>Porsche</Text>
                  <Text style={MainScreenCss.leftText}>Berlint</Text>
                </View>
                <Image
                  source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                  style={{ height: '100%', width: '20%', marginRight: 20 }}
                />
                <View style={MainScreenCss.rightTextContainer}>
                  <Text style={MainScreenCss.rightText}>/Day</Text>
                  <Text style={MainScreenCss.rightText}>$$$$</Text>
                </View>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('./../../../../assets/backgroundCar/361334.jpg')}
              style={{ marginRight: 20, width: 320, height: 200, borderRadius: 20, overflow: 'hidden' }}
            >
              <View style={MainScreenCss.textContainer}>
                <Image
                  source={require('./../../../../assets/imageIcon/iconCar.png')}
                  style={{ height: '100%', width: '15%', marginRight: 20 }}
                />
                <View style={MainScreenCss.leftTextContainer}>
                  <Text style={MainScreenCss.leftText}>Porsche</Text>
                  <Text style={MainScreenCss.leftText}>Berlint</Text>
                </View>
                <Image
                  source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                  style={{ height: '100%', width: '20%', marginRight: 20 }}
                />
                <View style={MainScreenCss.rightTextContainer}>
                  <Text style={MainScreenCss.rightText}>/Day</Text>
                  <Text style={MainScreenCss.rightText}>$$$$</Text>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>
        <ScrollView style={MainScreenCss.BodyItem}>
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
            <Text style={{ paddingBottom: 10, fontWeight: 700 }}>Các đối tác với chúng tôi</Text>
            <ScrollView style={{ height: height * 10 / 100 }} horizontal={true}>
              <Image
                source={require('../../../../assets/logoCar/logoBMW.png')}
                style={MainScreenCss.logoCar}
              />

              <Image
                source={require('../../../../assets/logoCar/logoPeugeot.png')}
                style={MainScreenCss.logoCar}
              />

              <Image
                source={require('../../../../assets/logoCar/logoFerrari.jpg')}
                style={MainScreenCss.logoCar}
              />

              <Image
                source={require('../../../../assets/logoCar/logoMitsubishi.jpg')}
                style={MainScreenCss.logoCar}
              />

              <Image
                source={require('../../../../assets/logoCar/logoToyota.jpg')}
                style={MainScreenCss.logoCar}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </ScrollView>
      <BottomTabComp color1="#146C94" />
    </SafeAreaView>
  )
}


export default MainScreen
