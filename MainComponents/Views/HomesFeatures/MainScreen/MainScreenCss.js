import { StyleSheet } from 'react-native'

const MainScreenCss = StyleSheet.create({
  FullScreen: {
    fontFamily: 'Roboto',
    backgroundColor:'white'
  },
  Header: {
    height: 50,
    paddingLeft: 30,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  TextLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '40%',
  },
  Body: {
    paddingTop: 30,
  },
  ScrollView: {
    paddingRight: 15,
  },
  Popular: {
    padding: 20,
    backgroundColor:'white',
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

  },
  Rent: {
    padding: 20
  },
  RentItem: {
    height: 180,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }


})

export default MainScreenCss;