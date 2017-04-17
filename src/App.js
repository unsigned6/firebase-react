import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBWXw6Cuu-NmDuSkH7idERRV8TM1VhiYIw",
  authDomain: "testproj-32a5c.firebaseapp.com",
  databaseURL: "https://testproj-32a5c.firebaseio.com",
  projectId: "testproj-32a5c",
  storageBucket: "testproj-32a5c.appspot.com",
  messagingSenderId: "475119962711"
};
firebase.initializeApp(config);

class App extends Component {
  constructor() {
      super();
      this.state = {
          speed: 10
      };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    console.log('did');
    speedRef.on('value', snap => {
        console.log('speed ref callback',snap.val());
        this.setState({
            speed: snap.val()
        });
    });
  }

  render() {
    return (
      <div className="App">
         <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.speed}</h1>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
