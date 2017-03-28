var React = require('react');
var {NavLink} = require('react-router-dom');

var Nav = (props) => {
  let activeStyles = {
    fontWeight: 'bold',
    color: 'green'
  }
  return (
    <div>
      <h2>Nav Component Is Rendering</h2>
      <NavLink exact to="/" replace activeStyle={activeStyles}>Get Weather
      </NavLink>
      <NavLink to="/about" replace activeStyle={activeStyles}>
        About
      </NavLink>
      <NavLink to="/examples" replace activeStyle={activeStyles}>Examples</NavLink>
    </div>
  )
};
module.exports = Nav;
