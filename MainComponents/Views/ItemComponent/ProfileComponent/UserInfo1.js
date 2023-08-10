import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import MainProfileCss from '../../ProfilesFetures/Profile/MainProfileCss';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const UserInfo1 = (props) => {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState(null);
    const isFocused = useIsFocused();


    const retrieveUserInfo = async () => {
        try {
          const jsonString = await AsyncStorage.getItem('user');
          if (jsonString) {
            const userData = JSON.parse(jsonString);
            setUserInfo(userData);
            
          }
        } catch (error) {
          console.error('Error retrieving user data from AsyncStorage:', error);
        }
      };

        useEffect(() => {
           
        
            // Retrieve user data whenever the screen gains focus
              retrieveUserInfo(isFocused);
          }, [isFocused]);
        
          // Rest of your component logic...
    return (
        <View style={MainProfileCss.ViewProfile1}>
             {userInfo ? (
        <>
            <View style={MainProfileCss.ViewHinhProfile}>
                <View>
                    
                    <Image
                        source={{uri: userInfo.photo}}
                        style={{ width: 150, height: 150, marginLeft: 20,borderRadius:100}}
                    />
                </View>
            </View>
            <View style={MainProfileCss.ViewChuProfile}>
                <View style={MainProfileCss.ViewChuProfile1}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Xin chào, {userInfo.fullname}</Text>
                    <Text style={{ alignSelf: 'flex-start' }}>{userInfo.email}</Text>
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
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Xin chào, User</Text>
                    
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
