import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('screen');

const MainScreenCss = StyleSheet.create({
  FullScreen: {
    flex: 1,
    fontFamily: 'Roboto',
    width: width,
    height: height,
  },
  Header: {
    
    paddingTop: 10,
    height: height *10/100,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#87CEEB',
  },
  TextLogin: {
    flexDirection: 'row'
  },
  Body: {
    flex: 9,
    marginVertical:10,
  },
  ScrollView: {
    paddingRight: 15,
  },
  Popular: {
    padding: 10,
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
    marginBottom: height*7/100,
    backgroundColor: '#ECECEC',
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
    paddingHorizontal: 20,
  },
  logoCar: {
    backgroundColor: 'white',
    width: width * 20/100,
    height: width *20/100,
    marginLeft: 10,
    borderRadius: 10,
  },

  PopularPost: {
    width: width *90/100,
    height: height *25/100,
    borderRadius: 10,
    borderColor: '#146C94',
    borderWidth: 1,
    marginRight: 10,
  },
  PopularItem: {
    flexDirection: 'row',
  },
  PopularViewInfo: {
    width: width *35/100,
    height: height *21/100,
    padding: 10,
    //backgroundColor: 'red',
    alignItems:'center',
  },
  PopularViewImg: {
    width: width *50/100,
    height: height *20/100,
    borderRadius: 10,
  },
  promotionView: {
    height: height *4/100,
    justifyContent:'center',
    paddingLeft: 10,
  },
  promotionText: {
    fontSize: 15,
    fontWeight:"bold",
    color: 'gray',
  },
  nameText: {
    fontSize: 18,
    width: 70,
  },
  priceText: {
    fontSize: 15,
  },

  distanceTouch: {
    width: 100,
    height: 30,
    marginTop: 5,
    borderRadius:10,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#146C94',
  },
  distanceText: {
    fontSize: 15,
    fontWeight:'bold',
    color: "white",
  },
})

export default MainScreenCss;