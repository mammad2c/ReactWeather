var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter, Route, Link, Match, Miss} = require('react-router-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// import createBrowserHistory from 'history/createBrowserHistory';
// var history = createBrowserHistory();
// var {HashRouter} = require('react-router-dom');
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
ReactDOM.render(
  <HashRouter>
  <div>
    <Nav/>
    <Route exact path="/" component={Main}/>
    <Route path="/about" component={About}/>
    <Route path="/examples" component={Examples}/>
  </div>
</HashRouter>, document.getElementById('app'));
