import * as React from 'react'
import { Button, Image, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/HomeScreen'
import Detail from '../screens/DetailScreen'
import Signup from '../screens/SignupScreen'
import ForgotPassword from '../screens/ForgotPassword'




const Stack = createStackNavigator()

function MainStackNavigator(props) {
  const { navigation } = props
    return (
      <NavigationContainer  initialRouteName='Signup'
      screenOptions={{
        gestureEnabled: true
      }}>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: <Image style={{ width: 50, height: 50,  }}
            source = {require('../images/menu.png')}/> ,
            
            headerStyle: {
            backgroundColor: '#FFEF00',
            },
            headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Detail')}
              title= "info"
              color="blue"
              options ={{title: <Image style={{ width: 60, height: 60,  }}
            source = {require('../images/menu.png')}/> }}
            />
          ),
          
          
             }}
            

          />
          <Stack.Screen
            name='Detail'
            component={Detail}
            options={{ title: <Image style={{ width: 50, height: 50 }}
            source = {require('../images/steer1-02.png')}/>,
            headerStyle: {
            backgroundColor: '#FFEF00',
          }, }}
            
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{ title: 'Signup Screen',
            headerStyle: {
            backgroundColor: '#FFEF00'},
            
            }}
          />
         <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{ title: 'Reset Password',
            headerStyle: {
            backgroundColor: '#FFEF00',}  
            }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default MainStackNavigator