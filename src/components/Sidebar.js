import React from 'react'
import { StyleSheet, View, Text,Sidebar } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground,Image } from 'react-native';


export default Sidebar = props => (
    <ScrollView>
        <ImageBackground 
            source={require("../images/blue.jpg")}
            style={{width: undefined, padding:16 , paddingTop: 48}}>
                <image source={require("../images/home.png")}
                    style={styles.profile}
                />
                <Text style={styles.name}>Grant Brown</Text>
                <View style={{flexDirection:"row"}}>
                    <Text>Home</Text>

                </View>

        </ImageBackground>

        <View style={styles.container}>
             <DrawerNavigatorItems{...props}/>      

        </View>
        <Text>Sidebar</Text>
    </ScrollView>
);
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profile: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: "#FFF",
        borderWidth:3,
    },
    name:{
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    }
});
