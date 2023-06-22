import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const ImageOnly = () => {
  return (
    <View style ={styles.ImageOnly1}>
        <View style ={styles.ImageOnly2}>
            <View>
                <Image
                    source={{uri:'https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-8.jpg'}}
                    style = {styles.avatar}                
                />
            </View>
        </View>
    </View>
  )
}

export default ImageOnly

const styles = StyleSheet.create({
    ImageOnly1:{
        flex:2,
        flexDirection:'row',
        //backgroundColor:'red'
        borderBottomWidth:1,
        borderColor:'#ECECEC'
    },
    ImageOnly2:{
        flex:1
    },
    avatar:{
        height:100,
        width:100,
        alignSelf:'center',
        justifyContent:'center',
        marginVertical:30,
        borderRadius:500,
    },
})