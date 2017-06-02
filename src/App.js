import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {browserHistory, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Link to="/register">Regsiter</Link>
        <Link to="/login">Login</Link>
        <Link to="/chats">Chats</Link>
      </div>
    );
  }
}

export default App;
