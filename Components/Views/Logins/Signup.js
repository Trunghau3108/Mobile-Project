import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  
  const [getHide1, setHide1] = useState(false);
  const [getHide2, setHide2] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={{
          uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/346155086_3382944808638933_6647747312354489682_n.png?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=EYzvNVobun4AX8e4p08&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSNStaDH8zq6WMjvkLZFBEPhOig9DgSJ0JHVbgvXGWAYg&oe=6493976A',
        }}
        style={styles.logo}
      ></Image>

      <Text style={styles.inputLabel}>Số điện thoại</Text>
      <TextInput placeholder='Nhập số điện thoại ...' style={styles.input}/>
      
      <Text style={styles.inputLabel}>Mật khẩu</Text>
      <TextInput 
        placeholder='Nhập mật khẩu' 
        style={styles.input}
        secureTextEntry={getHide1 ? false:true}
      />
      
      <View style={[{paddingTop: 105},styles.eyecon]}>
        <TouchableOpacity
          onPress={() => {
            setHide1(!getHide1)
          }}
        >
          {getHide1?
            <FontAwesome name="eye" size={24} color="gray"/>
            :
            <FontAwesome name="eye-slash" size={24} color="gray"/>
          }          
        </TouchableOpacity>
      </View>

      <Text style={styles.inputLabel}>Nhập lại mật khẩu</Text>
      <TextInput 
        placeholder='Nhập mật khẩu' 
        style={styles.input}
        secureTextEntry={getHide2 ? false:true}
      />
      
      <View style={[{paddingTop: 290},styles.eyecon]}>
        <TouchableOpacity
          onPress={() => {
            setHide2(!getHide2)
          }}
        >
          {getHide2?
            <FontAwesome name="eye" size={24} color="gray"/>
            :
            <FontAwesome name="eye-slash" size={24} color="gray"/>
          }          
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
      style={[{backgroundColor: '#23C2C2'},styles.touch]}
      onPress={()=>{
        alert('Đăng ký thành công !')
      }}
      >
        <Text style={styles.touchLabel}>Đăng ký</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 10,}}>Hoặc</Text>

      <TouchableOpacity 
      style={[{backgroundColor: 'gray'},styles.touch]}
      onPress={() => navigation.navigate('Signin')}
      >
        <Text style={styles.touchLabel}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFFFFF',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    input: {
      borderRadius: 10,
      borderWidth: 2,
      marginBottom: 10,
      width: '80%',
      height: 50,
      paddingLeft: 20,
    },
    touch: {
      width: '80%',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    touchLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    inputLabel: {
      alignSelf: 'flex-start',
      marginLeft: '10%',
      marginRight: '10%',
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    eyecon: {
      alignSelf: 'flex-end',
      position:'absolute',
      paddingRight: 50,
    },
});

export default Signup