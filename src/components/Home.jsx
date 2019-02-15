import React from 'react';
import bg from '../assets/images/homebg2.jpg';

function Home(){
    var divStyle={
        backgroundImage: "url("+bg+")",
        height:800,
        width:"100%",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    var h1Style={
        textAlign:"center",
        fontSize:90,
        paddingTop:100
    }
    var h3Style={
        textAlign:"center",
        fontSize: "30px",
        paddingTop: 30,
        margin:50
    }
    var h4Style={
        textAlign:"center",
        fontSize: "30px",
        margin:50,
        border: "1px solid darkorange",
    }
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>Manasa Vesala</h1>
      <h3 style={h3Style}>I'm a Seattle based web designer & front‑end developer focused on crafting clean  & user‑friendly experiences.</h3>
      <h4 style={h4Style}>Contact Me</h4>
    </div>
  );
}

export default Home;