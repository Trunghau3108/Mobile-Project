import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React, { useState, useRef } from 'react'

import ForgetPassCss from '../ForgetPass/ForgetPassCss';
import VerifyCodeCss from '../VerifyCodes/VerifyCodeCss';
import Popup from '../../ItemComponent/Popup/Popup';

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
    const [modal, setModal] = useState(false);
    const [text, setText] = useState('');
    const [icon, setIcon] = useState('warning');

    const sendVerification = () => {
        const phone = '+84' + PhoneNumber;
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phone, recaptchaVerifier.current)
            .then((verificationId) => {
                setVerificationId(verificationId);
                setHide(false);
            })
            .catch((error) => {
                console.log('Lỗi xác minh số điện thoại:', error);
                setText("Có lỗi xảy ra khi gửi mã xác minh OTP.");
                setModal(true);
            });
        // setPhoneNumber('');
        console.log(PhoneNumber);

    }

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => { 
                setIcon('checkmark-done-sharp');
                setText(" Successfull !");
                setModal(true);
                setCode('');
                nagivation.navigate('NewPass');
            })
            .catch((error) => {
                setText('Sai mã OTP !',error);
                console.log(error)
                setModal(true);
            })

    }

    return (
        <>
        {
            modal?
            (
                <>
                <Popup
                    visible={modal}
                    icon = {icon}
                    text = {text}
                    onPress={()=>{setModal(false)}}
                />
                </>
            )
            :
            (
                <>
                    <FirebaseRecaptchaVerifierModal
                        ref = { recaptchaVerifier }
                        firebaseConfig = { firebaseConfig }
                    />
                    {
                        hide?
                        (
                                <SafeAreaView style = { ForgetPassCss.container } >
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
                                </SafeAreaView >
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
                                            onPress={() => { setHide(true) }}
                                        >
                                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, }}>Quay lại</Text>
                                        </TouchableOpacity>

                                        <View style={VerifyCodeCss.dangnhapview}>
                                            <Text style={[VerifyCodeCss.text, { fontSize: 13, right: 5 }]}>Chưa nhận được mã xác nhận</Text>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    sendVerification();
                                                    setIcon('reload');
                                                    setText('Chúng tôi đã gửi lại mã xác nhận, vui lòng xem và nhập lại!');
                                                    setModal(true);
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
        </>
    )
}

export default Forget
