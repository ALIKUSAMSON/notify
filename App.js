import React from 'react';import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import SplashScreen from './src/Calendar/SplashScreen';
import login from './src/Calendar/login';
import AppNavigator from './src/Calendar/AppNavigator';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator,

});


export default createAppContainer(InitialNavigator);