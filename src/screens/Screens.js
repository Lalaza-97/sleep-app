import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { colors } from 'react-native-elements';


export default class Screens extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <TouchableOpacity style={{alignItems:"flex-end", margin:16}}
                onPress={this.props.navigation.openDrawer} >
                

                </TouchableOpacity>
                <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={styles.text}>{this.props.name}Screens </Text>
                </View>
            </SafeAreaView>
        </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
      },
})