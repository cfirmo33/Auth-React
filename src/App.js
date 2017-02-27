import React, { Component } from 'react';
import  { View, Text } from 'react-native';
import firebase from 'firebase';
import  { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDLUWpQrmE4rg3m4U1dZvhgjRN7Wvpo3jM',
      authDomain: 'auth-1938d.firebaseapp.com',
      databaseURL: 'https://auth-1938d.firebaseio.com',
      storageBucket: 'auth-1938d.appspot.com',
      messagingSenderId: '218387878283'
    });
  }

  render () {
    return (
      <View>
        <Header headerText="Autentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
