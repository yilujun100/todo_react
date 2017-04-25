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
          <li><Link to="/demo1">demo1-ReactDOM.render()</Link></li>
          <li><Link to="/demo2">demo2-jsx</Link></li>
          <li><Link to="/demo3">demo3-component</Link></li>  
          <li><Link to="/demo4">demo4-get Actual DOM</Link></li>
          <li><Link to="/demo5">demo5-this.state</Link></li>
          <li><Link to="/demo6">demo6-form</Link></li>          
        </ul>
      </div>
    );
  }
}

export default App;