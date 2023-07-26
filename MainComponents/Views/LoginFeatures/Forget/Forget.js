import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React, { useState, useRef } from 'react'

import ForgetPassCss from '../ForgetPass/ForgetPassCss';
import VerifyCodeCss from '../VerifyCodes/VerifyCodeCss';

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../../../../config'

import { useNavigation } from '@react-navigation/native';

const Forget = () => {
    const nagivation = useNavigation();
    const [hide, setHide] = useState(true);
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phone = '+84' + PhoneNumber;
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phone, recaptchaVerifier.current)
            .then(setVerificationId)
            .catch((error) => {
                console.log('Lỗi xác minh số điện thoại:', error);
                alert('Có lỗi xảy ra khi gửi mã xác minh OTP.');
            });
        setPhoneNumber('');
        console.log(PhoneNumber);
        setHide(false);
    }

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
                Alert.alert(" Successfull !");
                nagivation.navigate('NewPass');
            })
            .catch((error) => {
                alert(error);
            })

    }

    return (
        <>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            {
                hide ?
                    (
                        <SafeAreaView style={ForgetPassCss.container}>
                            <View style={ForgetPassCss.imgView}>
                                <Image
                                    source={require('../../../../assets/LoginFeaturesImg/ForgotPass.png')}
                                    style={ForgetPassCss.img}
                                />
                            </View>
                            <View style={ForgetPassCss.main}>
                                <View style={ForgetPassCss.textView}>
                                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#146C94' }}>Quên mật khẩu</Text>
                                    <Text style={{ color: 'gray' }}>Vui lòng nhập số điện thoại để gửi mã xác nhận</Text>
                                </View>
                                <View style={ForgetPassCss.inputView}>
                                    <Feather name="phone" size={20} color="#146C94" />
                                    <TextInput
                                        placeholder='Nhập số điện thoại(không nhập 0)...'
                                        onChangeText={setPhoneNumber}
                                        style={ForgetPassCss.input}
                                    />
                                </View>
                                <View style={ForgetPassCss.touchView}>
                                    <TouchableOpacity
                                        style={ForgetPassCss.dangki}
                                        onPress={sendVerification}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Xác Nhận</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[ForgetPassCss.dangki, { marginTop: 10 }]}
                                        onPress={() => {
                                            nagivation.navigate('Signin')
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Quay lại</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                    )
                    :
                    (
                        <SafeAreaView style={VerifyCodeCss.container}>
                            <View style={VerifyCodeCss.imgView}>
                                <Image
                                    source={require('../../../../assets/LoginFeaturesImg/VerifiedCode.png')}
                                    style={VerifyCodeCss.img}
                                />
                            </View>
                            <View style={VerifyCodeCss.main}>
                                <View style={VerifyCodeCss.textView}>
                                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#146C94' }}>Nhập mã xác nhận</Text>
                                    <Text style={{ color: 'gray' }}>Mã xác nhận đã được gửi qua số điện thoại người dùng</Text>
                                </View>
                                <View style={VerifyCodeCss.inputView}>
                                    <Feather name="lock" size={20} color="#146C94" />
                                    <TextInput
                                        placeholder='Nhập mã xác nhận...'
                                        onChangeText={setCode}
                                        style={VerifyCodeCss.input}
                                    />
                                </View>
                                <View style={VerifyCodeCss.touchView}>
                                    <TouchableOpacity
                                        style={VerifyCodeCss.dangki}
                                        onPress={confirmCode}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Xác Nhận</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[VerifyCodeCss.dangki, { marginTop: 10 }]}
                                        onPress={()=>{setHide(true)}}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Quay lại</Text>
                                    </TouchableOpacity>

                                    <View style={VerifyCodeCss.dangnhapview}>
                                        <Text style={[VerifyCodeCss.text, { fontSize: 13, right: 5 }]}>Chưa nhận được mã xác nhận</Text>
                                        <TouchableOpacity
                                            onPress={() => {
                                                sendVerification
                                                alert('Chúng tôi đã gửi lại mã xác nhận, vui lòng xem và nhập lại!');
                                            }}
                                        >
                                            <Text style={[VerifyCodeCss.text, { fontSize: 13, textDecorationLine: 'underline', fontWeight: 'bold' }]}>Gửi lại</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </SafeAreaView>
                    )
            }
        </>
    )
}

export default Forget
