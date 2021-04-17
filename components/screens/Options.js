import React from 'react';
import { Button, View,TouchableOpacity,Text } from 'react-native';

export default function NotificationsScreen({ navigation }) {
    const signOutUser = async () => {
      try {
        await firebase.auth().signOut();
        navigation.navigate("login");
      } catch (e) {
        //console.log(e);
      }
      
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={navigation.openDrawer}
          title="Open navigation drawer"
        />
        <Button
          onPress={() => navigation.goBack()}
          title="Go back home"
        />
      </View>
  
    );
  }