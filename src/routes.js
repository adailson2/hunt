import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
import Main from './pages/main';

export default createStackNavigator({
  Main
}, {
  navigationOptions: {
    headerTitleStyle:{
      alignSelf:'center',
      textAlign: 'center',
      width: '95%',
    },
    headerStyle: {
      backgroundColor: '#da552f',
    },
    headerTintColor: '#fff'
  }
});