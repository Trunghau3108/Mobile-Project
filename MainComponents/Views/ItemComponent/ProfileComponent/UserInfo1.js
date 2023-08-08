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

        useEffect(() => {
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
        
            // Retrieve user data whenever the screen gains focus
            if (isFocused) {
              retrieveUserInfo();
            }
          }, [isFocused]);
        
          // Rest of your component logic...
    return (
        <View style={MainProfileCss.ViewProfile1}>
             {userInfo ? (
        <>
            <View style={MainProfileCss.ViewHinhProfile}>
                <View>
                    
                    <Image
                        source={{ uri: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt07d62336ee8ed926/6214ab2690aa357658b8e4cc/18-maguire.jpg?auto=webp&format=pjpg&width=3840&quality=60' }}
                        style={MainProfileCss.img}
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
