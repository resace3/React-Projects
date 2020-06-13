import React, {Component} from 'react';
import logo from '.logo.svg';
import './App.css';
import Event_binding from './Event_binding'
import ParentComponent from './ParentComponent'


Class App extends Component {
  render() {
    return (
      <div className = "app">?
        <ParentComponent/>
      </div>

    );
  }
}

export default App;
