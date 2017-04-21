import React, { Component } from 'react';
import './App.css';
import { 
  Link 
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h3>learn react</h3>
        <ul className="nav">
          <li><Link to="/demo1">demo1</Link></li>
          <li><Link to="/demo2">demo2</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;