import React, {Component} from 'react';
import logo from '.logo.svg';
import './App.css';
import user_greeting from './user_greeting'
Class App extends Component{
  render() {
    return(
      <div className = "App">
      <user_greeting/>
      </div>
    );
  }
}

export default App;
