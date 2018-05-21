import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes} from './Routes';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Secrets App</h2>
        <Routes/>
        
        
        <Link to="/signup">
          <button>Signup</button>
          
        </Link>
        <Link to="/login">
          <button>Login</button>
          
        </Link>
       
       
      
      </div>
    );
  }
}

export default App;
