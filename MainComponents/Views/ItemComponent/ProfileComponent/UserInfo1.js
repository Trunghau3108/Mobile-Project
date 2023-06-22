import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, SectionList, FlatList } from 'react-native'
import React from 'react'
import MainProfileCss from '../../ProfilesFetures/Profile/MainProfileCss';
import { useNavigation } from '@react-navigation/native';

const UserInfo1 = (props) => {
    const navigation = useNavigation();
    return (
        <View style={MainProfileCss.ViewProfile1}>
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
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Xin chào, Thắng</Text>
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
        </View>
    )
}

export default UserInfo1

const styles = StyleSheet.create({})