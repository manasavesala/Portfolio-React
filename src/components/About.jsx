import React from 'react';
import bg from '../assets/images/contactbg2.jpg';

function About(){
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
    fontSize:90,
    paddingTop:80
  };
  var h3Style={
    textAlign:'center',
    fontSize: '30px',
    paddingTop: 20,
    margin:50
  };
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>About Me</h1>
      <h3 style={h3Style}>Highly motivated new web developer. Looking for position as a software developer to work in a challenging and learning environment.</h3>
      <h3 style={h3Style}>I am currently a student at Epicodus Coding School enrolling in a 7-month, full-time coding bootcamp in Web Development, learning to code in JavaScript, C#, Angular and React, in Seattle.</h3>
    </div>
  );
}

export default About;
