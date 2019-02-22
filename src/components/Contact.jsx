
import React from 'react';
import bg from '../assets/images/bg3.jpg';

function Contact(){
  var divStyle={
    backgroundImage: 'url('+bg+')',
    height:700,
    width:'100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  var h1Style={
    textAlign:'center',
    fontSize:60,
    paddingTop:100
  };
  var h3Style={
    textAlign:'center',
    fontSize: '30px',
    paddingTop: 30,
    margin:50
  };
  var h4Style={
    textAlign:'center',
    color:'black',
    fontSize:25,
    paddingTop:20
  };
  var astyle={
    paddingRight:20,
    paddingLeft:20,
    textDecoration:'none',
    color:'red'
  };
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>OK, LET’S CREATE SOMETHING GREAT</h1>
      <h3 style={h3Style}>If you like my work and have some cool project to work on, just send me direct message or contact me through social sites listed below.</h3>

      <h4 style={h4Style}><a href="www.instagram.com" style={astyle}>INSTAGRAM</a> |<a href="www.instagram.com"  style={astyle}>FACEBOOK</a> |<a href="www.instagram.com" style={astyle}>TWITTER</a> |<a href="www.instagram.com"  style={astyle}>GITHUB</a>  </h4>

    </div>
  );
}

export default Contact;