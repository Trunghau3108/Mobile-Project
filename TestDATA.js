import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './MainComponents/Views/ItemComponent/Posts/Post'
import urlAPI from './urlAPI'
// npm i axios trc khi import
const TestDATA = () => {
    const [data, setData] = useState([]);
    //thuc hien lay data
    // chạy link backend trước, sau đó lấy link localhost backend để chạy public server ngrok
    const getDataAPI = async () => {
        let res = await axios.post(urlAPI + '/api/categories/GetListCategory');
        setData(res.data);
        console.log(urlAPI)
    }

    const requestionOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email: 'React updates ', Password: '' })
    };

    useEffect(() => { getDataAPI() }, [])

    return (
        <View>
            {
                data.length ?
                    data.map((item) =>
                        <ScrollView>
                            <Text>{item.nameVn}</Text>
                            <Text>{item.name}</Text>
                        </ScrollView>
                    ) : null
            }
        </View>
    )
}


export default TestDATA

const styles = StyleSheet.create({})