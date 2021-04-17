import React from 'react';
import { Button, View,Text,TouchableOpacity } from 'react-native';
import * as firebase from "firebase";

import NavCircle from "../navigation/NavCircle"
export default function HomeScreen({ navigation }) {
    const signOutUser = async () => {
        try {
          await firebase.auth().signOut();
        } catch (e) {
          //console.log(e);
        }
        
      }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <NavCircle navigation={navigation}/>
        <Button
          onPress={navigation.openDrawer}
          title="Open navigation drawer"
        />
        <Button
          onPress={() => navigation.navigate('Options')}
          title="Go to notifications"
        />
        <TouchableOpacity onPress={() => signOutUser()}>
            <View style={{}}>
            {/* Lougout button */}
            <Text style={{}}>Logout</Text>
          </View>
          </TouchableOpacity>
      </View>
    );
  }
  
  