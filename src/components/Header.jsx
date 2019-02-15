import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyle={
    backgroundColor:"aqua",
    height:'50px',
    paddingTop:"25px",
    paddingLeft: "300px"
  }
  var astyle={
    paddingLeft:"40px",
    border:"2 black",
    textDecoration:"none",
    color:"black"
  }
  return (
    <div style={headerStyle}>
      <a style={astyle}><Link to="/">Home</Link></a>
      <a style={astyle}><Link to="/about">About</Link></a>
      <a style={astyle}><Link to="/projects">Projects</Link></a>
      <a style={astyle}><Link to="/contact">Contact</Link></a>
    </div>
  );
}

export default Header;