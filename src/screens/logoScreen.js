
 import React from 'react'
 import {StyleSheet,  Button,  } from 'react-native'

 function LogoScreen (props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text>ay hi</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.pheader}>Forgot Password</Text>
            </TouchableOpacity>
        </View>
    )
 } 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebebeb'
    }
    })




 export default LogoScreen
 //homescreen stuff
 
 /*<View style={{
    backgroundColor: "blue",
    height:"28%",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  }}>
    <Image
      source={require("../images/menu.png")}
      style={{
        height:30,
        width:30,
        marginTop:15
      }}
      onPress={() => navigation.navigate('Option')}
    />
      <View style={{
         flexDirection:"row",
         alignItems:"center",
         marginTop:25,
         width:"100%"
      }}>
           <View style={{width:"60%"}}>
               <Text style={{
                   fontSize:20,
                   color:"#FFF",
                   fontWeight: "bold",
                   paddingLeft:50
               }}> 
               Impunity 
               </Text>
               <View style={{width:"50%", alignItems:"flex-end"}}>
               <Image
                   source={require("../images/steer1-02.png")}
                   style={{height:60, width:60}}
               />
               </View>

           </View>
      </View>
  </View>*/


 import Logo from '../screens/logoScreen'
 
 <Stack.Screen
 name='LogoScreen'
 component={logoScreen}
 options={{ title: <Image style={{ width: 250, height: 50 }}
 source = {require('../images/menu.png')}/> 

 }}
/>