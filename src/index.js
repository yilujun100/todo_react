import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { 
	BrowserRouter as Router, 
	Route 
} from 'react-router-dom';
import Demo1 from './containers/Demo1';
import Demo2 from './containers/Demo2';

ReactDOM.render(
  <Router>
  	<div>
	  	<Route exact path="/" component={App} />
	  	<Route path="/demo1" component={Demo1} />
	  	<Route path="/demo2" component={Demo2} />
  	</div>
  </Router>,
  document.getElementById('root')
);
