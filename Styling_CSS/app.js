import React, {Component} from 'react';
import logo from '.logo.svg';
import './App.css';
import Event_binding from './Event_binding'
import stylesheet from './stylesheet'
import in_line from './in_line'
import './app_styles.css'
import styles from './app_styles.module.css'
Class App extends Component {
  render() {
    return (
      <div className = "app">?
        <h1 className= 'error'>Error</h1>
        <h1 className = {styles.success}>Success</h1>
        <Inline/>
        <stylesheet primary = {false}/>
      </div>

    );
  }
}

export default App;
