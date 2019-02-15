import React from 'react';
import bg from '../assets/images/bg3.jpg';

function Contact(){
  var divStyle={
    backgroundImage: 'url('+bg+')',
    height:800,
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
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>OK, LET’S CREATE SOMETHING GREAT</h1>
      <h3 style={h3Style}>If you like my work and have some cool project to work on, just send me direct message or contact me through social sites listed below.</h3>
    </div>
  );
}

export default Contact;