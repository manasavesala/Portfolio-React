import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyle={
    backgroundColor:'#f2d2d2',
    height:'50px',
    paddingTop:'25px',
    paddingLeft: '200px'
  };
  var astyle={
    display: 'inline',
    paddingRight:30,
    fontSize:30
  };
  return (
    <div style={headerStyle}>
      <a style={astyle}><Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link></a>
      <a style={astyle}><Link style={{textDecoration: 'none', color: 'white'}} to="/about">About</Link></a>
      <a style={astyle}><Link style={{textDecoration: 'none', color: 'white'}} to="/projects">Projects</Link></a>
      <a style={astyle}><Link style={{textDecoration: 'none', color: 'white'}} to="/contact">Contact</Link></a>
      <a style={astyle}><Link style={{textDecoration: 'none', color: 'white', fontSize:'15px'}} to='/new'>-(Add New Project)</Link></a>
    </div>
  );
}

export default Header;