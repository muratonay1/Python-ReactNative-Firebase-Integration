
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import firebase from 'firebase';
console.disableYellowBox = true;
export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      data_source:"",
      
    }
  }
  async UNSAFE_componentWillMount() {
    var firebaseConfig = {
      apiKey: "bIzaSyBdep3RyeJ7QrqEV5gvUrkNOC1Q0vsCRCs",
      authDomain: "python-reactnative.firebaseapp.com",
      databaseURL: "https://python-reactnative.firebaseio.com",
      projectId: "python-reactnative",
      storageBucket: "python-reactnative.appspot.com",
      messagingSenderId: "1022337674451",
      appId: "1:1012827674461:web:124bbcd223d766025013b2",
      measurementId: "H-CXQ6Z36LM7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    firebase.database().ref('Rastgele').on('value', (data)=>{
      var deger=data.toJSON();
      var deger2=deger.sayi;
      this.setState({'data_source':deger2})
    })
    firebase.database().ref('Rastgele').on('value', (data)=>{
      var deger=data.toJSON();
      var deger2=deger.sayi;
      this.setState({'data_source':deger2})
    })
    setTimeout(()=>{
    
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#13334c' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#13334c' }}>
          <Text style={{ fontSize: 45, textAlign: 'center', textShadowColor: 'purple', textShadowRadius: 15, color: '#2694ab' }}>React Native and Python Entegrate Firebase Application</Text>
        </View>

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#13334c' }}>
          <Text style={{ fontSize: 25, textShadowColor: '#f2317f', textShadowRadius: 25, textDecorationLine: 'underline', color: '#BEF7E4' }}>Python Random Number</Text>
          <Text style={{ fontSize: 55, textDecorationColor: 'green', textShadowColor: 'green', textShadowRadius: 55, color: 'snow' }}>{this.state.data_source}</Text>
        </View>

      </View>
    )
  }
}
