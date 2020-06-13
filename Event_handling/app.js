import React, {Component} from 'react';
import logo from '.logo.svg';
import './App.css';
import FunctionClick from 'FunctionClick'
import ClassClick from 'ClassClick'

Class App extends Component {
  render() {
    return (
      <div className = "app">?
        <FunctionClick/>
        <ClassClick/>
      </div>

    );
  }
}

export default App;
