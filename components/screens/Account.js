
import { useFocusEffect } from '@react-navigation/native';
import React,{useState} from 'react';
import { Button, ScrollView,View,Text,TouchableOpacity } from 'react-native';
import * as firebase from "firebase";

import NavCircle from "../navigation/NavCircle"
import { height, width } from '../misc/dimensions';


export default function AccountScreen({ navigation }) {
  const [entries,setEntries] =React.useState([])  
  const renderA=(str,key)=>{
    return (<View style={{padding:10,width:.8*width,marginTop:.02*height,borderWidth:3,borderRadius:6,borderColor:"rgb(16, 63, 71)"}}><Text style={{fontSize:20,marginVertical:.05*height}} key={key}>{str}</Text></View>)
  }
  const signOutUser = async () => {
        try {
          await firebase.auth().signOut();
        } catch (e) {
          //console.log(e);
        }
        
      }
    
      useFocusEffect(
        React.useCallback( () => {
          firebase.auth().onAuthStateChanged(
            function (user) {
                if (user) {
                  const db = firebase.firestore();
                  var current = db.collection("users").doc(user.uid);
                  current.get().then(function (doc) {
                      setEntries(doc.data().entries);
                  }
                  )

                }
            }
        );
            

         return(()=>{var i =0;})},[])
    );
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <NavCircle navigation={navigation}/>

        
          <View style={{flex: 1,zIndex:-1}}>
          <ScrollView style={{paddingTop:.2*height}}>
            <Text style={{fontSize:30}}>Your Journal</Text>
            <Text style={{marginBottom:height*0.04}}>______________________</Text>
            {entries&&entries.map((a)=>renderA(a,Math.random()))}

            <TouchableOpacity onPress={() => signOutUser()}>
            <View style={{backgroundColor:"rgb(175, 213, 170)",padding:16,width:.6*width,borderRadius:20,marginTop:.1*height,alignSelf:"center"}}>
            {/* Lougout button */}
            <Text style={{fontSize:30}}>Logout</Text>
          </View>
          </TouchableOpacity>
          </ScrollView>
  </View>
      </View>
    );
  }
  
  