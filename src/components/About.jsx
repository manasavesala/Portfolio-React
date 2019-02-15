import React from 'react';
import bg from '../assets/images/contactbg2.jpg';

function About(){
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
        fontSize:90,
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
      <h1 style={h1Style}>About Me</h1>
      <h3 style={h3Style}>I enrolled in a Full Stack web Development course at Epicodus looking for new challenging opportunities in Software development</h3>
    </div>
  );
}

export default About;