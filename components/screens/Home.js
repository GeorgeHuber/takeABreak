import React,{useEffect} from 'react';
import { Alert,Button,Image,StyleSheet, View,Text,TouchableOpacity,ScrollView } from 'react-native';
import * as firebase from "firebase";

import NavCircle from "../navigation/NavCircle"
import { WebView } from 'react-native-webview'

import {width, height} from "../misc/dimensions"
export default function HomeScreen({ navigation }) {
  const [timeLeft,setTimeLeft] = React.useState(null)  
  const [endTime,setEndTime] = React.useState(null)
  const [random,setRandom] = React.useState(1)
  const [timer,setTimer] = React.useState(null)
  const [selection,setSelection] = React.useState(5000*60)
  const signOutUser = async () => {
        try {
          await firebase.auth().signOut();
        } catch (e) {
          //console.log(e);
        }
      }
      

      const resetDB = async() =>{
        firebase.auth().onAuthStateChanged(
          function (user) {
            if (user) {
           
              const db = firebase.firestore();
              var current = db.collection("users").doc(user.uid);
              
              current.update( {
                    endTime:null
                })
    
            }
          }
        )
      }
        

      const timesUp= () =>{
        Alert.alert("Times up! lets get back to work");
        resetDB();
        //setTimer(null)
      }
      const generateNewNumber = () => {
         setRandom(Math.floor(Math.random() * 8)+1);
         
     }
      const startTimer = (ms) =>{
        if(timer){
          return
        }
        generateNewNumber()
        var countDownDate = new Date().getTime()+ms;
          setEndTime(countDownDate)
          firebase.auth().onAuthStateChanged(
            function (user) {
              if (user) {
             
                const db = firebase.firestore();
                var current = db.collection("users").doc(user.uid);
                
                current.update( {
                      endTime:countDownDate,
                      random:random
                  })
      
              }
            }
          )
          var x = setInterval(function() {

          var now = new Date().getTime();

          var distance = countDownDate - now;

          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          
                //alert("starting timer")
              if (distance < 0) {
              clearInterval(x);
                timesUp();
                }
                else{
                  setTimeLeft( ""+minutes + "m " + seconds + "s ");
                }
              }, 1000);
              setTimer(x);
             navigation.navigate("Options")
              
      }
      

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"rgb(240, 242, 239)" }}>
          <NavCircle navigation={navigation}/>
          {/*<Image source={require("../../assets/backgrounds/trees2.png")} style={{position:"absolute",bottom:height*0.1,zIndex:-1,height:0.8*height}} resizeMethod={'resize'}/>*/}
          {timer&&<Text style={[styles.breakTimer]}>{timeLeft}</Text>}
          {!timer &&<Text style={[styles.breakTimer]}>0m 0s</Text>}
          <TouchableOpacity style={[styles.card,styles.button]} onPress={()=>startTimer(selection)}>
            <Text style={[styles.black]}>Take A Break</Text>
          </TouchableOpacity>
          <Text style={[styles.breakTimer,{fontSize:30,marginBottom:.002*height,marginTop:0.05*height}]}>minutes</Text>
          <View style={{flexDirection:"row",
            marginVertical:height*.005,
            width:.9*width,
            justifyContent:"space-around"
          }}>
            
            <TouchableOpacity style={[[selection==5*60*1000?styles.button2: styles.button1],styles.card]} onPress={()=>setSelection(5*60*1000)}>
              <Text style={[styles.black]}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[[selection==10*60*1000?styles.button2: styles.button1],styles.card]} onPress={()=>setSelection(10*60*1000)}>
            <Text style={[styles.black]}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[[selection==15*60*1000?styles.button2: styles.button1],styles.card]} onPress={()=>setSelection(15*60*1000)}>
              <Text style={[styles.black]}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[[selection==30*60*1000?styles.button2: styles.button1],styles.card]} onPress={()=>setSelection(30*60*1000)}>
              <Text style={[styles.black]}>30</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{height:0.08*height,width:0.6*width,borderRadius:10,backgroundColor:"rgb(239, 176, 161)",position:"absolute",bottom:0.06*height}} onPress={()=>{setTimeLeft("0m 0s");clearInterval(timer);setTimer(null),resetDB()}}>
            <Text style={[styles.breakTimer,{fontSize:30,marginBottom:.002*height,marginTop:0.015*height,alignSelf:"center"}]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    card: {
      backgroundColor:"white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 9,

        elevation: 16,
        display:"flex"
    },
    black:{
        color:"black",
        alignSelf:"center",
       
        fontSize:40
    },
    button:{
        backgroundColor:"rgb(175, 213, 170)",
        fontSize:40,
        padding:30,
        borderRadius:100,
        
    },
    button1:{
      fontWeight:"100",
      padding:4,
      borderRadius:10,
      width:0.20*width
  },
  button2:{
    fontWeight:"600",
    padding:4,
    borderRadius:10,
    width:0.40*width
},
    breakTimer:{
      fontSize:80,
      marginBottom:height*0.1,
      fontWeight:"800"
    }
})
  
  