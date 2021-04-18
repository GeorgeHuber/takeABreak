import React from 'react';
import { Button, View,Text,TouchableOpacity,Image } from 'react-native';

import {width, height} from "../misc/dimensions"

export default function NavCircle ({navigation}){
    const press = () => {
        navigation.openDrawer();
    }
    return(
        <TouchableOpacity onPress={()=>press()} style={{flexDirection:"column",alignItems:"center",height:height*0.15,width:height*0.15,borderStyle:"solid",borderWidth:0,position:"absolute",top:height*0.07,right:width*-0.02}}>
        <View style={{flexDirection:"column",alignItems:"center",width:20,
        height:20}}>
            <Image source={require("../../assets/nav/hamburger.png")} style={{width:width*.2,height:width*.2}}></Image>
        </View>

        </TouchableOpacity>
    )
}