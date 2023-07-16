import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('screen');

const MainScreenCss = StyleSheet.create({
  FullScreen: {
    fontFamily: 'Roboto',
    
  },
  Header: {
    paddingTop: 10,
    height: height *10/100,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#87CEEB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  TextLogin: {
    flexDirection: 'row'
  },
  Body: {
    height: height *87/100 ,
  },
  ScrollView: {
    paddingRight: 15,
  },
  Popular: {
    padding: 20,
    height: height * 34/100,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,

  },
  leftTextContainer: {
    flex: 1,
  },
  rightTextContainer: {
    flex: 1,
  },
  leftText: {
    color: 'white',
    marginBottom: 8,
    fontWeight: 700
  },
  rightText: {
    color: 'white',
    marginBottom: 5,
    fontWeight: 700
  },
  BodyItem: {
    backgroundColor: '#ECECEC',
    height: height *50/100,
  },
  Rent: {
    padding: 20,
  },
  RentItem: {
    height: 180,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  Partner: {
    height: height *18/100,
  },
  logoCar: {
    width: width * 20/100,
    height: width *20/100,
    marginLeft: 10,
    borderRadius: 10,
  },


})

export default MainScreenCss;