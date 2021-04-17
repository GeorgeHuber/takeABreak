import React, { Fragment } from 'react'
import { Dimensions, Image,StyleSheet, Text, TextInput, View, KeyboardAvoidingView} from 'react-native'
import * as firebase from "firebase";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {config} from "../../credentials.js"

import {width, height} from "../misc/dimensions"
import * as Google from 'expo-google-app-auth';

/*import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'*/


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default class Login extends React.Component {

  

  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null,
      page:0,
      sent:null,
    };
  }
  handleLogin = (email, password) => {
    try {
      
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }));
    } catch (error) {
      error => this.setState({ errorMessage: error.message })
    }
  }



  resetPasswordHandler = () => {
   this.setState({page:2,errorMessage:null})
  }

  





  handleSignUp = (email, password) => {
    var e =false;

    try {

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error =>{ e=true;this.setState({ errorMessage: error.message })});

      //copy into other pages
      if(!e){
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const db = firebase.firestore();

          //console.log("user " + user.uid);
          //console.log("made it this far");
          db.collection("users").doc(user.uid).set({  })
            .then(function () {
              //console.log("Document successfully written!");
            });
        }
      });}

    } catch (error) {
      error => this.setState({ errorMessage: error.message })
    }
  }

  send =  (emailAddress) => {var auth = firebase.auth();
   

    auth.sendPasswordResetEmail(emailAddress).then(()=>{
  // Email sent.
    this.setState({ sent: "A message has been sent to your email. Click the link to reset it." });}
    ).catch(error => this.setState({ errorMessage: error.message }));}

  render() {
    return (
      <View style={{padding:"20% 20%"}}>
       
        {  this.state.page!=2?<Fragment>
        {(this.state.page===0) &&
        <Fragment>
        <Text style={{}}>Login</Text>
        <KeyboardAvoidingView
      
      behavior={ "position"}>
        <View style={{}}>
        <TextInput
          style={{}}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        </View>
        <View style={{}}>
        <TextInput
          secureTextEntry
          style={{}}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}

        />
        </View>
        </KeyboardAvoidingView>
        {this.state.errorMessage &&
          <Text style={{ color: 'red',backgroundColor:"rgba(255,255,255,0.8)" }}>
            {this.state.errorMessage}
          </Text>}
        <View style={{ paddingVertical:.05*height,paddingHorizontal: .13*width }}>
          <TouchableOpacity onPress={() => this.handleLogin(this.state.email, this.state.password)}>
            <View style={{}}>
              <Text style={{}}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            
            onPress={() => this.resetPasswordHandler()}
          >
            <Text style={{}}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity

            onPress={() => {this.setState({page:1,errorMessage:null,email:""})}}
          >
            <Text style={{}}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
        </Fragment>}

        {/*signup page*/}

        {this.state.page===1&&<Fragment>
        <Text style={{}}>Sign Up</Text>
        <KeyboardAvoidingView
        
      behavior={ "position"}>
        <View style={{}}>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={{}}
          onChangeText={email => this.setState({ email })}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        </View>
        <View style={{}}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={{}}
          onChangeText={password => this.setState({ password })}

        />
        </View>
        </KeyboardAvoidingView>
        {this.state.errorMessage &&
          <Text style={{ color: 'red',backgroundColor:"rgba(255,255,255,0.8)" }}>
            {this.state.errorMessage}
          </Text>}
        <View style={{ paddingVertical:0.05*height,paddingHorizontal: .13*width }}>
          <TouchableOpacity onPress={() => this.handleSignUp(this.state.email, this.state.password)}>
            <View style={{}}>
              <Text style={{}}>Sign Up</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginVertical:0.018*height,marginHorizontal: .05*width }} />
          <TouchableOpacity

            onPress={() => {this.setState({page:0,errorMessage:null,email:""})}}
          >
            <Text style={{}}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
        </Fragment>}
          </Fragment>:



          
          <Fragment>{/*reset page*/}
          <Text style={{}}>Type Your Email: </Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red',backgroundColor:"rgba(255,255,255,0.8)" }}>
              {this.state.errorMessage}
            </Text>}
          {this.state.sent && <Text style={{marginVertical:0.0246*height,fontSize:15,fontFamily:"Futura-Medium"}}>{this.state.sent}</Text>}
          
          <View style={{}}>
            <TextInput
            style={{}}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          </View>
          <View style={{padding:height*.1}}>
          <TouchableOpacity

  onPress={() => this.send(this.state.email)}
>
<Text style={{}}>Reset Password</Text>
</TouchableOpacity>

<TouchableOpacity

onPress={() =>  {this.setState({page:0,errorMessage:null,email:""})}}
>
<Text style={{}}>Back</Text>
</TouchableOpacity>
          
          </View>
            </Fragment>}
            
      </View>
    )
  }
}

const styles = StyleSheet.create({
  padding:20
})