
import React from 'react';
import { Dimensions } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Feather } from '@expo/vector-icons'

import {
    SignupScreen,
    ForgotPassword,
    HomeScreen,
    DetailScreen,
    Settings
  } from './src/screens';

  import Sidebar from './src/components/Sidebar'
  
  const DrawerNavigator = createDrawerNavigator({
    SignupScreen,
    ForgotPassword,
    HomeScreen,
    DetailScreen,
    Settings
  },
  {
      contentComponent: props => <Sidebar {...props}/>
  }
  );
  
  
  export default createAppContainer (DrawerNavigator);
  