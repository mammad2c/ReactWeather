var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter, Route, Link, Match, Miss} = require('react-router-dom');
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
ReactDOM.render(
  <HashRouter>
  <div>
    <Nav/>
    <Route exact path="/" component={Main}/>
    <Route path="/about" component={About}/>
    <Route path="/examples" component={Examples}/>
  </div>
</HashRouter>, document.getElementById('app'));
