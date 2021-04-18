import React from 'react';
import { Button, View,Text,TouchableOpacity,Image} from 'react-native';
import {WebView} from "react-native-webview"
import {width, height} from "./misc/dimensions"

export default function NavCircle ({link}){
    const iframeString='<iframe src="'+link+'"  style="border:solid black 6px; overflow: hidden;"  scrolling="no" width= '+width*2.5+' height= '+width*2.5+''

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
        <View>
          <WebView
          bounces={false}
          scalesPageToFit={false}
          javaScriptEnabled
          style={{width:width*.9,height:width*.9,borderWidth:9}}
          automaticallyAdjustContentInsets={false}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head>
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