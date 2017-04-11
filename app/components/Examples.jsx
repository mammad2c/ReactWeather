var React = require('react');
var {NavLink} = require('react-router-dom');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>
        Here are a few example locations to try out:
      </p>
      <ol>
        <li>
          <NavLink to='/?location=Mashhad'>Mashhad, MH</NavLink>
        </li>
        <li>
          <NavLink to='/?location=Tehran'>Tehran, TH</NavLink>
        </li>
      </ol>
    </div>
  )
}
module.exports = Examples;
