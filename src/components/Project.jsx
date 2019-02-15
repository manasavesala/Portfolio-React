import React from 'react';
import PropTypes from 'prop-types';

function Project(props){
  var bioImg = {
    width: '70%'
  };
  var bioText = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: 'black'
  };
  var bioDiv = {
    float: 'left',
    width: '33%',
    height: '400px'
  };
  return (
    <div style={bioDiv}>
      <hr />
      <div style={bioText}>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <img style={bioImg} src={props.image} alt='pic'></img>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Project;