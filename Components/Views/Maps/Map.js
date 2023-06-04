import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React,{useEffect, useState} from 'react'
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoder';

const Map = () => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Geocoder.geocodeAddress('Vietnam');
        const { position, bounds } = response[0];
        setRegion({
          latitude: position.lat,
          longitude: position.lng,
          latitudeDelta: bounds.max.lat - bounds.min.lat,
          longitudeDelta: bounds.max.lng - bounds.min.lng,
        });
      } catch (error) {
        console.error('Lỗi cmnr, xem lại đi ba:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.dropdownView}></View>
        <MapView style={styles.map} region={region}>
          {region && <Marker coordinate={region}/>}
        </MapView>
        <View style={styles.pageView}>
          <ScrollView horizontal={true}>
            <Page/>
            <Page/>
            <Page/>
            <Page/>
            <Page/>
          </ScrollView>
        </View>
    </SafeAreaView>
  )
}

const Page = () => {
  return(
    <View style={styles.page}>
      <Text>àhfc</Text>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    dropdownView: {
      height:80,
    },
    pageView: {
      width:'100%',
      paddingVertical: 10,
      paddingLeft: 10,
      position:'absolute',
      marginTop: 660,
    },
    page: {
      width:250,
      height: 150,
      backgroundColor: 'red',
      borderRadius: 15,
      marginRight: 10,
    },
});