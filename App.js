
import React from 'react';
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';


import MainStackNavigator from './src/navigation/MainStackNavigator';
import AppControl from './AppControl'


export default function App()  {
  return (
    <MainStackNavigator />,
    <AppControl />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


