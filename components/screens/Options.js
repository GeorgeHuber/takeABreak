import React,{useState} from 'react';
import { Button, View,TouchableOpacity,Text } from 'react-native';
import {width, height} from "../misc/dimensions"
import { WebView } from 'react-native-webview'

import NavCircle from "../navigation/NavCircle"
import P5Iframe from "../../components/P5Iframe"
const Elem = (Onclick,num) =>{
const isOpen=false;

    return(
        <View>
        {!isOpen&&<TouchableOpacity onPress={()=>{Onclick(num)}} style={{backgroundColor:"blue",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05}}>
        </TouchableOpacity>}    
        {isOpen&&<View style={{backgroundColor:"red",position:"absolute",width:width,height:height,zIndex:1}} >
                </View>}
        </View>
    )
}

export default function NotificationsScreen({ navigation }) {
    const signOutUser = async () => {
      try {
        await firebase.auth().signOut();
        navigation.navigate("login");
      } catch (e) {
        //console.log(e);
      }
      
    }

    const [screenNumber,setScreenNumber] = useState(null)
    const [isOpen,setIsOpen] = useState(false)
    
     const fade = (num)=>{
        setIsOpen(!isOpen);
        setScreenNumber(num);
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {screenNumber&&screenNumber==1&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              <P5Iframe link={"https://editor.p5js.org/grady.georgia/embed/3Bs9Zlc5i"}></P5Iframe>
              </View>}


              {screenNumber&&screenNumber==2&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              <P5Iframe link={"https://editor.p5js.org/grady.georgia/embed/_5pT_N46c"}></P5Iframe>
              </View>}

              {screenNumber&&screenNumber==3&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              <P5Iframe link={"https://editor.p5js.org/grady.georgia/embed/3Bs9Zlc5i"}></P5Iframe>
              </View>}

              {screenNumber&&screenNumber==4&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              </View>}

              {screenNumber&&screenNumber==5&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              </View>}

              {screenNumber&&screenNumber==6&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              </View>}

              {screenNumber&&screenNumber==7&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              </View>}

              {screenNumber&&screenNumber==8&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              </View>}   

              {screenNumber&&screenNumber==9&&<View style={{backgroundColor:"white",position:"absolute",width:width,height:height,zIndex:1,top:0,left:0,padding:"20%"}} >
              <TouchableOpacity onPress={()=>{setScreenNumber(null);setIsOpen(false)}}>
                  <Text>back</Text>
              </TouchableOpacity>
              </View>}
          <NavCircle navigation={navigation}/>
          <View style={{position:"absolute",bottom:0,
          flexDirection:"row",height:height*0.75,width:width,justifyContent:'space-around'}}>
          <View>
            <View>
                {!isOpen&&<TouchableOpacity onPress={()=>{setScreenNumber(1);setIsOpen(true)}} style={{backgroundColor:"blue",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05,borderRadius:8}}>
                    </TouchableOpacity>}    
            </View>
            <View>
                {!isOpen&&<TouchableOpacity onPress={()=>{setScreenNumber(2);setIsOpen(true)}} style={{backgroundColor:"red",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05,borderRadius:8}}>
                    </TouchableOpacity>}    
            </View>
            <View>
                {!isOpen&&<TouchableOpacity onPress={()=>{setScreenNumber(3);setIsOpen(true)}} style={{backgroundColor:"purple",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05,borderRadius:8}}>
                    </TouchableOpacity>}    
            </View>
            <View>
                {!isOpen&&<TouchableOpacity onPress={()=>{setScreenNumber(4);setIsOpen(true)}} style={{backgroundColor:"black",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05,borderRadius:8}}>
                    </TouchableOpacity>}    
            </View>
            
          </View >
          <View>
          <View>
                {!isOpen&&<TouchableOpacity onPress={()=>{setScreenNumber(5);setIsOpen(true)}} style={{backgroundColor:"yellow",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05,borderRadius:8}}>
                    </TouchableOpacity>}    
            </View>
            <View>
                {!isOpen&&<TouchableOpacity onPress={()=>{setScreenNumber(6);setIsOpen(true)}} style={{backgroundColor:"orange",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05,borderRadius:8}}>
                    </TouchableOpacity>}    
            </View>
            <View>
                {!isOpen&&<TouchableOpacity onPress={()=>{setScreenNumber(7);setIsOpen(true)}} style={{backgroundColor:"green",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05,borderRadius:8}}>
                    </TouchableOpacity>}    
            </View>
            <View>
                {!isOpen&&<TouchableOpacity onPress={()=>{setScreenNumber(8);setIsOpen(true)}} style={{backgroundColor:"blue",zIndex:-1,width:width*.4,height:height*.1,marginBottom:height*0.05,borderRadius:8}}>
                    </TouchableOpacity>}    
            </View>
          </View>
          </View>
        
      </View>
      
  
    );
  }