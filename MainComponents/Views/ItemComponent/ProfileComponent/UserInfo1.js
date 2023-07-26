import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import MainProfileCss from '../../ProfilesFetures/Profile/MainProfileCss';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const UserInfo1 = (props) => {
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
        <View style={MainProfileCss.ViewProfile1}>
             {userInfo ? (
        <>
            <View style={MainProfileCss.ViewHinhProfile}>
                <View>
                    
                    <Image
                        source={{ uri: 'https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-8.jpg' }}
                        style={MainProfileCss.img}
                    />
                </View>
            </View>
            <View style={MainProfileCss.ViewChuProfile}>
                <View style={MainProfileCss.ViewChuProfile1}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Xin chào, {userInfo.email}</Text>
                    <Text style={{ alignSelf: 'flex-start' }}>0912345678</Text>
                </View>
                <View style={MainProfileCss.ViewChuProfile2}>
                    <View style={MainProfileCss.ViewChuProfileButton}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(props.navig); }}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>Chỉnh sửa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </>
              ) : (
                <>
            <View style={MainProfileCss.ViewHinhProfile}>
                <View>
                    
                    <Image
                        source={{ uri: 'https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-8.jpg' }}
                        style={MainProfileCss.img}
                    />
                </View>
            </View>
            <View style={MainProfileCss.ViewChuProfile}>
                <View style={MainProfileCss.ViewChuProfile1}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Xin chào</Text>
                    <Text style={{ alignSelf: 'flex-start' }}>0912345678</Text>
                </View>
                <View style={MainProfileCss.ViewChuProfile2}>
                    <View style={MainProfileCss.ViewChuProfileButton}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(props.navig); }}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>Chỉnh sửa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </>
         )}
        </View>
    )
}

export default UserInfo1
