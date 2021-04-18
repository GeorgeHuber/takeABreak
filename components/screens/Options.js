import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Alert,View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { width, height } from "../misc/dimensions"
import { WebView } from 'react-native-webview'
import * as firebase from "firebase";
import NavCircle from "../navigation/NavCircle"
import P5Iframe from "../../components/P5Iframe"
import { TextInput } from 'react-native-gesture-handler';
const Elem = (Onclick, num) => {
    const isOpen = false;

    return (
        <View>
            {!isOpen && <TouchableOpacity onPress={() => { Onclick(num) }} style={{ backgroundColor: "blue", zIndex: -1, width: width * .4, height: height * .1, marginBottom: height * 0.05 }}>
            </TouchableOpacity>}
            {isOpen && <View style={{ backgroundColor: "red", position: "absolute", width: width, height: height, zIndex: 1 }} >
            </View>}
        </View>
    )
}

export default function OptionScreen({navigation }) {

    const getRandomNumber=()=>{
        return Math.floor(Math.random()*18)
    }
    
    const [screenNumber, setScreenNumber] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [timeLeft, setTimeLeft] = React.useState(null)
    const [endTime, setEndTime] = React.useState(null)
    const [timer, setTimer] = React.useState(null)
    const [entry,setEntry]=React.useState(null)
    const [nums, setNums]=React.useState([getRandomNumber(),getRandomNumber(),getRandomNumber(),getRandomNumber()])
    var t=null;

    
    const resetDB = async () => {
        firebase.auth().onAuthStateChanged(
            function (user) {
                if (user) {

                    const db = firebase.firestore();
                    var current = db.collection("users").doc(user.uid);

                    current.update({
                        endTime: null
                    }).then()

                }
            }
        )
    }


    const timesUp = () => {
        Alert.alert("Times up! lets get back to work");
        resetDB();
        setTimeLeft("" + 0 + "m " + 0 + "s ");
        clearInterval(timer)

    }



    useFocusEffect(
        React.useCallback( () => {
            
            firebase.auth().onAuthStateChanged(
                function (user) {
                    if (user) {
                        const db = firebase.firestore();
                        var current = db.collection("users").doc(user.uid);
                        current.get().then(function (doc) {
                            setScreenNumber(doc.data().random)
                            setEndTime(doc.data().endTime);
                            if (doc.data().endTime) {

                                
                                startTimer(doc.data().endTime)
                            } else {
                                //console.log(doc.data().endTime)
                                
                                setTimeLeft("0m 0s"); clearInterval(timer); setTimer(null); resetDB()
                            }
                        }
                        )

                    }
                }
            );

         return(()=>{clearInterval(t);
            firebase.auth().onAuthStateChanged(
                function (user) {
                    if (user) {
                        const db = firebase.firestore();
                        var current = db.collection("users").doc(user.uid);
            
                    current.update( {
                  
                        random:null
                    })}})   
            
        })},[])
    );

    const ExerciseList = React.memo((props) =>{
        const exercises = ["10 Jumping Jacks", "5 Push Ups", "10 Mountain Climbers", "10 Bicycle Crunches", "20 Second Plank", "10 Squats", "10 Lunges", "5 Burpees", "15 Calf Raises", "30 Second Wall Sit",  "5 Diamond Push Ups", "15 Second Side Plank", "10 Sit Ups",  "10 Crunches", "30 Seconds Run in Place", "5 Jump Squats", "10 Russian Twists"]
       
        return(
            <View style={{marginTop:height*0.2}}>
                {props.nums.map((a)=>{return <Text key={Math.random()} style={{fontSize:30,marginBottom:height*0.1}}>{exercises[a]}</Text>})}
            </View>
        )
    });

    const fade = (num) => {
        setIsOpen(!isOpen);
        setScreenNumber(num);
    }

    const startTimer = (endTime) => {
        if (timer) {
            clearInterval(timer)
            
        }
        var countDownDate = endTime;
        setEndTime(countDownDate)
        var x = setInterval(function () {

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
            else {
                setTimeLeft("" + minutes + "m " + seconds + "s ");
                
            }
        }, 1000);
        setTimer(x)
        t=x;
        //console.log(x)
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"rgb(240, 242, 239)" }}>
            {screenNumber && screenNumber == 1 && <View style={{ backgroundColor: "white", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>
                </TouchableOpacity>
                <P5Iframe link={"https://editor.p5js.org/grady.georgia/embed/3Bs9Zlc5i"}></P5Iframe>
            </View>}


            {screenNumber && screenNumber == 2 && <View style={{ backgroundColor: "white", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>
                </TouchableOpacity>
                <P5Iframe link={"https://editor.p5js.org/PineappleKing50/embed/xIZ9RLx4f"}></P5Iframe>
            </View>}

            {screenNumber && screenNumber == 3 && <View style={{ backgroundColor: "white", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>
                </TouchableOpacity>
                <P5Iframe link={"https://editor.p5js.org/PineappleKing50/embed/jzl3ytGRD"}></P5Iframe>
            </View>}

            {screenNumber && screenNumber == 4 && <View style={{ backgroundColor: "white", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>

                </TouchableOpacity>
                <P5Iframe link={"https://editor.p5js.org/PineappleKing50/embed/Y8c5MGhbV"}></P5Iframe>
            </View>}

            {screenNumber && screenNumber == 5 && <View style={{ backgroundColor: "white", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>
                </TouchableOpacity>
                <P5Iframe link={"https://editor.p5js.org/Creativename72/embed/8Hv0gUVnc"}></P5Iframe>
            </View>}

            {screenNumber && screenNumber == 6 && <View style={{ backgroundColor: "rgb(175, 213, 170)", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>
                </TouchableOpacity>
                
                <ExerciseList nums={nums}/>
            </View>}

            {screenNumber && screenNumber == 7 && <View style={{ backgroundColor: "white", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>
                </TouchableOpacity>
                <View style={{alignSelf:"center",backgroundColor:"rgb(175, 213, 170)",paddingVertical:20,marginTop:.1*height,width:.8*width,paddingHorizontal:20,flexDirection:"column"}}>
               <TextInput multiline={true} style={{alignSelf:"center",marginLeft:20,fontSize:15,width:.8*width,height:.2*height}} onChangeText={(r)=>setEntry(r)} placeholder={"Write whatever you feel like"}></TextInput>
               </View>
               <TouchableOpacity onPress={()=>{firebase.auth().onAuthStateChanged(
                        function (user) {
                            if (user) {

                                const db = firebase.firestore();
                                var current = db.collection("users").doc(user.uid);
                                 current.get().then(function(doc){
                                    console.log(doc.data()) 
                                    var temp=doc.data().entries;
                                    var d = new Date();
                                temp.push(""+d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear()+"  -  "+ entry)
                                current.update({
                                    entries: temp
                                }).then(()=>{setScreenNumber(null); setIsOpen(false)} )
                                });
                            }
                        }
        )}} style={{
            backgroundColor:"white",
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 10,
              },
              shadowOpacity: 0.53,
              shadowRadius: 9,
      
              elevation: 16,
              display:"flex",
              padding:20,
              borderRadius:10,
              marginTop:20
          }}><Text style={{fontSize:20,fontWeight:"600"}}>record</Text></TouchableOpacity>
            </View>}

            {screenNumber && screenNumber == 8 && <View style={{ backgroundColor: "white", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>
                </TouchableOpacity>
                <P5Iframe link={"https://editor.p5js.org/grady.georgia/embed/LX64Ahc7M"}></P5Iframe>
            </View>}

            {screenNumber && screenNumber == 9 && <View style={{ backgroundColor: "white", position: "absolute", width: width, height: height, zIndex: 1, top: 0, left: 0, padding: "20%" }} >
                <TouchableOpacity onPress={() => { setScreenNumber(null); setIsOpen(false) }}>
                    <Text style={[styles.backArrow]}>&#8592;</Text>
                </TouchableOpacity>
            </View>}
            <NavCircle navigation={navigation} />
            {timeLeft && <Text style={{position:"absolute",right:.37*width,top:.09*height,fontSize:30,fontWeight:"200",zIndex:1}}>{timeLeft}
            </Text>}
            <View style={{
                position: "absolute", bottom: 0,
                flexDirection: "row", height: height * 0.75, width: width, justifyContent: 'space-around'
            }}>
                <View>
                    <View>
                        {!isOpen && <TouchableOpacity onPress={() => { setScreenNumber(1); setIsOpen(true) }} style={[{ backgroundColor: "rgb(175, 213, 170)"},styles.elem , styles.card]}>
                            <Text style={[styles.white]}>Shield Sean</Text>
                        </TouchableOpacity>}
                    </View>
                    <View>
                        {!isOpen && <TouchableOpacity onPress={() => { setScreenNumber(2); setIsOpen(true) }} style={[{ backgroundColor: "rgb(16, 63, 71)"},styles.elem , styles.card]}>
                            <Text style={[styles.white]}>Sally Snake</Text>
                        </TouchableOpacity>}
                    </View>
                    <View>
                        {!isOpen && <TouchableOpacity onPress={() => { setScreenNumber(3); setIsOpen(true) }} style={[{ backgroundColor: "rgb(11, 83, 81)"},styles.elem , styles.card]}>
                            <Text style={[styles.white]}>Bobs Breakout</Text>
                        </TouchableOpacity>}
                    </View>
                    <View>
                        {!isOpen && <TouchableOpacity onPress={() => { setScreenNumber(4); setIsOpen(true) }} style={[{ backgroundColor: "rgb(175, 213, 170)"},styles.elem , styles.card]}>
                            <Text style={[styles.white]}>Mental Checkup</Text>
                        </TouchableOpacity>}
                    </View>

                </View >
                <View>
                    <View>
                        {!isOpen && <TouchableOpacity onPress={() => { setScreenNumber(5); setIsOpen(true) }} style={[{ backgroundColor: "rgb(239, 176, 161)"},styles.elem , styles.card]}>
                            <Text style={[styles.white]}>Molly's Memorization</Text>
                        </TouchableOpacity>}
                    </View>
                    <View>
                        {!isOpen && <TouchableOpacity onPress={() => {setScreenNumber(6); setIsOpen(true);setNums([getRandomNumber(),getRandomNumber(),getRandomNumber(),getRandomNumber()])
    }} style={[{ backgroundColor: "rgb(11, 83, 81)"},styles.elem , styles.card]}>
                            <Text style={[styles.white]}>Exercise</Text>
                        </TouchableOpacity>}
                    </View>
                    <View>
                        {!isOpen && <TouchableOpacity onPress={() => { setScreenNumber(7); setIsOpen(true) }} style={[{ backgroundColor: "rgb(16, 63, 71)"},styles.elem , styles.card]}>
                        <Text style={[styles.white]}>Journal</Text>
                        </TouchableOpacity>}
                    </View>
                    <View>
                        {!isOpen && <TouchableOpacity onPress={() => { setScreenNumber(8); setIsOpen(true) }} style={[{ backgroundColor: "rgb(239, 176, 161)"},styles.elem , styles.card]}>
                        <Text style={[styles.white]}>Dodging Dan</Text>
                        </TouchableOpacity>}
                    </View>
                </View>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    white: {
        color: "white",
        alignSelf: "center",
        marginTop: 15,
        fontSize: 18
    },
    backArrow: {
        fontSize: 40,
        padding: 6,
        position:"absolute",
        left:-width*0.1
    },
    elem:{
        zIndex: -1, width: width * .45, height: height * 0.14, marginBottom: height * 0.05, borderRadius: 8 
    }
})