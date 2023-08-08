import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const ImageOnly = () => {
  return (
    <View style ={styles.ImageOnly1}>
        <View style ={styles.ImageOnly2}>
            <View>
                <Image
                    source={{uri:'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt07d62336ee8ed926/6214ab2690aa357658b8e4cc/18-maguire.jpg?auto=webp&format=pjpg&width=3840&quality=60'}}
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
        backgroundColor:'white', 
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