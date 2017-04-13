var React = require('react');
var {NavLink} = require('react-router-dom');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = "";
      window.location.hash = "#/?location=" + encodedLocation;
    }
  },
  render: function() {
    let activeStyles = {
      fontWeight: 'bold'
    }
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <NavLink exact to="/" activeClassName="active" replace activeStyle={activeStyles}>Get Weather
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" replace activeClassName="active" activeStyle={activeStyles}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/examples" activeClassName="active" replace activeStyle={activeStyles}>Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
})
module.exports = Nav;
