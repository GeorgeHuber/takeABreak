import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';

import Loading from "./components/auth/Loading"
import Login from "./components/auth/Login"

import HomeScreen from "./components/screens/Home.js"
import OptionsScreen from "./components/screens/Options.js"

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Options" component={OptionsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer independent={true}>
     <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={DrawerNav}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// create our app's navigation stack
const NavStack = createSwitchNavigator(
  {
    Loading,    
    Login,
    Main
  },
  {
    initialRouteName: 'Loading',
  }
); 
export default createAppContainer(NavStack);




