import React from 'react';
import PropTypes from 'prop-types';

function Project(props){
  var bioText = {
    fontFamily: 'sans-serif',
    color: 'black'
  };
  var bioDiv = {
    float: 'left',
    width: '44%',
    height: '200px',
    border: '1px solid black',
    paddingTop: 10,
    paddingLeft: 20,
    marginLeft:30,
    marginBottom: 30
  };
  return ( 
    <div style={bioDiv}>
      <div style={bioText}>
        <h3>{props.name}</h3>
        <h4>Description:{props.description}</h4>
        <h4>Technologies:{props.technologies}</h4>
        <h4>{props.link}</h4>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string,
  link: PropTypes.string
};

export default Project;