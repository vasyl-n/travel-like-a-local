var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./jsx/App.jsx').default;

ReactDOM.render(<App username={username}/>, document.getElementById('app'));