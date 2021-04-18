import React from 'react';
import { Button, View,Text,TouchableOpacity,Image} from 'react-native';
import {WebView} from "react-native-webview"
import {width, height} from "./misc/dimensions"

export default function NavCircle ({link}){
    const iframeString='<iframe src="'+link+'"  style="overflow: hidden;"  scrolling="no" width= '+width*3+' height= '+width*3+''

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:height*.15 }}>
          
        <View style={{width:width*.9,height:width*.9}}>
          <WebView
          bounces={false}
          scalesPageToFit={false}
          javaScriptEnabled
          style={{width:width*.95,height:height*.95}}
          automaticallyAdjustContentInsets={false}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head>
                    
                    </head>
                    <body>
                      <div id="baseDiv">${iframeString}</div> 
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
      </View>
      </View>
    );
  }