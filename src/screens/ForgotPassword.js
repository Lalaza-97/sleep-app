import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button,  } from 'react-native'



function ForgotPassword(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
             <TextInput style= {styles.textInput} placeholder="Your name"
             underlineColorAndroid={'transparent'} />

            <TextInput style= {styles.textInput} placeholder="Your email"
            underlineColorAndroid={'transparent'} />

            <TextInput style= {styles.textInput} placeholder="Your Password"
            secureTextEntry={true}   underlineColorAndroid={'transparent'} />

            <TextInput style= {styles.textInput} placeholder="Your Confirm Password"
            secureTextEntry={true}   underlineColorAndroid={'transparent'} />

            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.btntext}>Reset</Text>
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
    },
    textInput: {
     
        height:40,
        marginBottom: 30,
        color: "blue",
        borderBottomColor: "blue",
        borderBottomWidth:1,
    },
    button:{
      
        alignItems: "center",
        padding: 20,
        backgroundColor:"white",
        borderRadius: 25,
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderBottomWidth:3,
        borderColor: "yellow",
        marginTop: 30,
    },
    btntext:{
        color: "yellow",
        fontWeight: "bold",
    }
})

export default ForgotPassword