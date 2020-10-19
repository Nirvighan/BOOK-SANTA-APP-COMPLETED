import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ItemRequestScreen from '../screens/ItemRequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/image1.png")} style={{width:24, height:24}}/>,
      tabBarLabel : "Home Screen",
    }
  },
  ExchangeScreen: {
    screen: ItemRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/image2.png")} style={{width:24, height:24}}/>,
      tabBarLabel : "Exchange Screen",
    }
  }
});
