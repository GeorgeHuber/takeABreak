import React from 'react';
import { Button, View,Text,TouchableOpacity,Image } from 'react-native';

export default function NavCircle ({navigation}){
    const press = () => {
        
        console.log("kcj");
        navigation.openDrawer;
    }
    return(
        <TouchableOpacity onPress={()=>press()}>
        <View style={{width:40,
        height:40}}>
            <Text>kjhsakjfhskdjh</Text>
            <Image source={require("../../assets/nav/open.png")}></Image>
        </View>
        </TouchableOpacity>
    )
}