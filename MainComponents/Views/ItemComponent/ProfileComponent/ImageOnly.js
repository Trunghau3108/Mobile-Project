import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const ImageOnly = () => {
    return (
        <View style={styles.ImageOnly1}>
            <View style={[styles.space,{backgroundColor:'#136a95'}]}></View>
            <View style={styles.space}></View>
            <Image
                source={{ uri: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt07d62336ee8ed926/6214ab2690aa357658b8e4cc/18-maguire.jpg?auto=webp&format=pjpg&width=3840&quality=60' }}
                style={styles.avatar}
            />
        </View>
    )
}

export default ImageOnly

const styles = StyleSheet.create({
    ImageOnly1: {
        flex: 2,
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 500,
        position: 'absolute',
        borderColor: '#f3f3f3',
        borderWidth: 2,
        top: 20,
        left: 120 ,
    },
    space: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
})