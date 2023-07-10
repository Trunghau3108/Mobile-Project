import {Text, View,Image, TouchableOpacity,ScrollView,ImageBackground } from 'react-native'
import React from 'react'
import MainScreenCss from './MainScreenCss'
import CarListFilter from '../../ItemComponent/CarListFilter/CarListFilter'
import FindCarFilter from '../../ItemComponent/FindCarFilter/FindCarFilter'


const MainScreen = () => {
  return (
    <ScrollView style={MainScreenCss.FullScreen}  showsHorizontalScrollIndicator={false}>
      <View style={MainScreenCss.Header}>
            <Image
                source={{uri: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/355277533_165164906548918_5098595855432448840_n.png?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JFAd3fv7E8EAX9TB4Zc&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdRQs3eE1J6gqd0VyZKSNaDHWjCUhg5X6OdwXuwLr1Opwg&oe=64BCAABC'}}
                style={{height: '150%', width: '40%'}}
            />

            <TouchableOpacity style={MainScreenCss.TextLogin}>
                <Text style={{fontWeight:700}}>Đăng nhập /  </Text>
                
                <Image
                source={{uri: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/357768302_1253900368589050_8418537261867223891_n.png?stp=cp0_dst-png&_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rGcZ671vv9QAX9YYyu2&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdRyj4upxC4wc7rK4GajQ19pIZ1d1-E9VHylfeNmPuCiYg&oe=64C8930B'}}
                style={{height: '100%', width: '15%'}}
            />
            </TouchableOpacity>
           
      </View>
      <View style={MainScreenCss.Body}>
        <FindCarFilter/>
            <View style={MainScreenCss.Popular}> 
                <Text style={{paddingBottom:10,fontWeight:700,fontSize:20}}>Các loại xe phổ biến tại CFA</Text>
                <ScrollView horizontal style={{cursor:'pointer'}} showsHorizontalScrollIndicator={false}>
                <ImageBackground
                     source={require('./../../../../assets/backgroundCar/cfg0W5.jpg')}
                     style={{marginRight: 20,width:320,height:200,borderRadius: 20, overflow: 'hidden'}}
                  >
                  
                  <View style={MainScreenCss.textContainer}>
                    {/* <Image
                        source={require('./../../../../assets/imageIcon/undraw_delivery_truck_vt6p.png')}
                        style={{height: '100%', width: '15%',marginRight:20}}
                    /> */}
                    <View style={MainScreenCss.leftTextContainer}>
                      <Text style={MainScreenCss.leftText}>Porsche</Text>
                      <Text style={MainScreenCss.leftText}>Berlint</Text>
                    </View>
                    <Image
                        source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                        style={{height: '100%', width: '20%',marginRight:20}}
                    />
                    <View style={MainScreenCss.rightTextContainer}>
                      <Text style={MainScreenCss.rightText}>/Day</Text>
                      <Text style={MainScreenCss.rightText}>$$$$</Text>
                    </View>
                  </View>
                  
                  
                </ImageBackground>
                <ImageBackground
                     source={require('./../../../../assets/backgroundCar/1454584-full-size-porsche-911-hd-wallpapers-1920x1080-windows.jpg')}
                     style={{marginRight: 20,width:320,height:200,borderRadius: 20, overflow: 'hidden'}}
                  >
                  <View style={MainScreenCss.textContainer}>
                    <Image
                        source={require('./../../../../assets/imageIcon/iconCar.png')}
                        style={{height: '100%', width: '15%',marginRight:20}}
                    />
                    <View style={MainScreenCss.leftTextContainer}>
                      <Text style={MainScreenCss.leftText}>Porsche</Text>
                      <Text style={MainScreenCss.leftText}>Berlint</Text>
                    </View>
                    <Image
                        source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                        style={{height: '100%', width: '20%',marginRight:20}}
                    />
                    <View style={MainScreenCss.rightTextContainer}>
                      <Text style={MainScreenCss.rightText}>/Day</Text>
                      <Text style={MainScreenCss.rightText}>$$$$</Text>
                    </View>
                  </View>
                </ImageBackground>
                <ImageBackground
                     source={require('./../../../../assets/backgroundCar/b6IjFi.jpg')}
                     style={{marginRight: 20,width:320,height:200,borderRadius: 20, overflow: 'hidden'}}
                  >
                  <View style={MainScreenCss.textContainer}>
                    <Image
                        source={require('./../../../../assets/imageIcon/iconCar.png')}
                        style={{height: '100%', width: '15%',marginRight:20}}
                    />
                    <View style={MainScreenCss.leftTextContainer}>
                      <Text style={MainScreenCss.leftText}>Porsche</Text>
                      <Text style={MainScreenCss.leftText}>Berlint</Text>
                    </View>
                    <Image
                        source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                        style={{height: '100%', width: '20%',marginRight:20}}
                    />
                    <View style={MainScreenCss.rightTextContainer}>
                      <Text style={MainScreenCss.rightText}>/Day</Text>
                      <Text style={MainScreenCss.rightText}>$$$$</Text>
                    </View>
                  </View>
                </ImageBackground>
                <ImageBackground
                     source={require('./../../../../assets/backgroundCar/porsche-rs-gt3-night-city-ie.jpg')}
                     style={{marginRight: 20,width:320,height:200,borderRadius: 20, overflow: 'hidden'}}
                  >
                  <View style={MainScreenCss.textContainer}>
                    <Image
                        source={require('./../../../../assets/imageIcon/iconCar.png')}
                        style={{height: '100%', width: '15%',marginRight:20}}
                    />
                    <View style={MainScreenCss.leftTextContainer}>
                      <Text style={MainScreenCss.leftText}>Porsche</Text>
                      <Text style={MainScreenCss.leftText}>Berlint</Text>
                    </View>
                    <Image
                        source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                        style={{height: '100%', width: '20%',marginRight:20}}
                    />
                    <View style={MainScreenCss.rightTextContainer}>
                      <Text style={MainScreenCss.rightText}>/Day</Text>
                      <Text style={MainScreenCss.rightText}>$$$$</Text>
                    </View>
                  </View>
                </ImageBackground>
                <ImageBackground
                     source={require('./../../../../assets/backgroundCar/361334.jpg')}
                     style={{marginRight: 20,width:320,height:200,borderRadius: 20, overflow: 'hidden'}}
                  >
                  <View style={MainScreenCss.textContainer}>
                    <Image
                        source={require('./../../../../assets/imageIcon/iconCar.png')}
                        style={{height: '100%', width: '15%',marginRight:20}}
                    />
                    <View style={MainScreenCss.leftTextContainer}>
                      <Text style={MainScreenCss.leftText}>Porsche</Text>
                      <Text style={MainScreenCss.leftText}>Berlint</Text>
                    </View>
                    <Image
                        source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                        style={{height: '100%', width: '20%',marginRight:20}}
                    />
                    <View style={MainScreenCss.rightTextContainer}>
                      <Text style={MainScreenCss.rightText}>/Day</Text>
                      <Text style={MainScreenCss.rightText}>$$$$</Text>
                    </View>
                  </View>
                </ImageBackground>
              </ScrollView>
            </View>
            <View style={MainScreenCss.BodyItem}>
              <View style={MainScreenCss.Rent}> 
                  <Text style={{fontWeight:700,fontSize:20}}>Thuê xe như thế nào</Text>

                  <View style = {MainScreenCss.RentItem}>
                  <Image
                          source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                          style={{height: '40%', width: '20%'}}
                  />
                  <Text style={{fontWeight:700,paddingBottom:5,fontSize:20}}>1 - Đặt xe trên ứng dụng</Text>
                  <Text style={{width:250,marginLeft:25,textAlign:'center'}}>Nhanh chóng đặt một chiếc xe ưng ý thông qua ứng dụng của chúng tôi.</Text>
                  </View>

                  <View style = {MainScreenCss.RentItem}>
                  <Image
                          source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                          style={{height: '40%', width: '20%'}}
                  />
                  <Text style={{fontWeight:700,paddingBottom:5,fontSize:20}}>2 - Nhận xe</Text>
                  <Text style={{width:250,marginLeft:25,textAlign:'center'}}>Nhận xe tại nhà hoặc tại các đại lý trong khu vực của chúng tôi.</Text>
                  </View>

                  <View style = {MainScreenCss.RentItem}>
                  <Image
                          source={require('./../../../../assets/imageIcon/nwaba_websiteicons_makeagift_1024x1024_2017_dollar.png')}
                          style={{height: '40%', width: '20%'}}
                  />
                  <Text style={{fontWeight:700,paddingBottom:5,fontSize:20}}>3 - Tận hưởng</Text>
                  <Text style={{width:250,marginLeft:25,textAlign:'center'}}>Sau khi hoàn tất thủ tục, bạn chỉ cần nhận xe và lên đường. Tất cả các phương tiện của chúng tôi đều đạt chuẩn an toàn.</Text>
                  </View>
              </View>
              <View style={MainScreenCss.Partner}> 
                  <Text style={{fontWeight: 700, fontSize:20}}>Các đối tác với chúng tôi</Text>
              </View>
            </View>
      </View>
    </ScrollView>
  )
}

export default MainScreen
