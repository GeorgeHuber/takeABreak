import React from 'react';
import { Button, View,Text,TouchableOpacity,Image } from 'react-native';

import {width, height} from "../misc/dimensions"

export default function NavCircle ({navigation}){
    const press = () => {
        navigation.openDrawer();
    }
    return(
        <TouchableOpacity onPress={()=>press()} style={{height:height*0.15,width:height*0.15,borderStyle:"solid",borderWidth:0,position:"absolute",top:height*0.04,right:width*-0.02}}>
        <View style={{width:20,
        height:20}}>
            <Image source={require("../../assets/nav/hamburger.png")} style={{width:width*.25,height:width*.25}}></Image>
        </View>

        </TouchableOpacity>
    )
}