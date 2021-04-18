import React from 'react';
import { Button, View,Text,TouchableOpacity } from 'react-native';
import * as firebase from "firebase";

import NavCircle from "../navigation/NavCircle"
import { WebView } from 'react-native-webview'

import {width, height} from "../misc/dimensions"
export default function HomeScreen({ navigation }) {
    const signOutUser = async () => {
        try {
          await firebase.auth().signOut();
        } catch (e) {
          //console.log(e);
        }
        
      }

      const press = () => {
        
        console.log("kcj");
        navigation.openDrawer();
    }
    const iframeString='<iframe src="https://editor.p5js.org/grady.georgia/embed/3Bs9Zlc5i"  style="width: 1000px; height: 1000px; overflow: hidden;"  scrolling="no" '

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <NavCircle navigation={navigation}/>
          {/*<WebView
          
          
          javaScriptEnabled
          style={{width:width*0.8,height:width*0.8}}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> // <--add header styles if needed
                    <body>
                      <div id="baseDiv">${iframeString}</div> 
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
*/}
      </View>
    );
  }
  
  