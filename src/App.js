import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {browserHistory, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ora Interactive</h2>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <Link to="/register">Regsiter</Link>
          <Link to="/login">Login</Link>
          <Link to="/chats">Chats</Link>
        </div>
      </div>
    );
  }
}

export default App;
