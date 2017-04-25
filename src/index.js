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
import Demo3 from './containers/Demo3';
import Demo4 from './containers/Demo4';
import LikeButton from './containers/Demo5';
import Input from './containers/Demo6';

// ReactDOM.render():用于将模板转为html语言,并插入指定的DOM节点
ReactDOM.render(
  <Router>
  	<div>
	  	<Route exact path="/" component={App} />
	  	<Route path="/demo1" component={Demo1} />
	  	<Route path="/demo2" component={Demo2} />
	  	<Route path="/demo3" component={Demo3} />
	  	<Route path="/demo4" component={Demo4} />
	  	<Route path="/demo5" component={LikeButton} />
	  	<Route path="/demo6" component={Input} />
  	</div>
  </Router>,
  document.getElementById('root')
);
