import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native'


function DetailScreen(props) {
  const { navigation } = props
  return (
    <View>
    <View style={styles.container}>
    <Text style={styles.text}>Detail Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Go to Signup Screen</Text>
      </TouchableOpacity>
    </View>
     
        <View style={styles.option}>

        </View>
      
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
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  option: {
    flex: 1,
    
    justifyContent: 'flex-start',
    height:80,
    weight:80,
    backgroundColor: 'blue'
  }
})

export default DetailScreen