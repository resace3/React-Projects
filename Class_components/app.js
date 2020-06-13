import React, {Component} from 'react';
import logo from '.logo.svg';
import './App.css';
import Welcome from './components/Welcome'
Class App extends Component{
  render() {
    return(
      <div className = "App">
      <Greet/>
      <Welcome/>
      </div>
    );
  }
}

export default App;
