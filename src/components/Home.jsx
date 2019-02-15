import React from 'react';
import bg from '../assets/images/bg4.jpg';
import { Link } from 'react-router-dom';

function Home(){
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
  var h4Style={
    textAlign:'center',
    fontSize: '30px',
    margin:50,
    // border: '1px solid darkorange',
    padding:5
  };
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>Manasa Vesala</h1>
      <h3 style={h3Style}>I'm a Seattle based web designer & front‑end developer focused on crafting clean  & user‑friendly experiences.</h3>
      <h4 style={h4Style}><Link style={{textDecoration: 'none', color: 'red'}} to="/contact">CONTACT ME</Link></h4>
    </div>
  );
}

export default Home;