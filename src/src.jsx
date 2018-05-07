var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./jsx/App.jsx').default;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider } from 'material-ui';
import Explore from './pages/explore.jsx';


// username coming from express user session
ReactDOM.render(
  <Router>
    <App username={username}/>
  </Router>
, document.getElementById('app'));
