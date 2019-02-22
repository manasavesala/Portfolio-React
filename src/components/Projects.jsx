import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

var divStyle={
  backgroundColor: '#e3ecf9',
  width:'100%',
  height: 4000
};

function Projects(props) {
  return (
    <div>
      <br/>
      <br/>
      <div style={divStyle}>
        <hr />
        {props.projectsList.map((project, index) =>
          <Project name={project.name}
            description={project.description}
            id={project.id}
            technologies={project.technologies}
            link={project.link}
            key={index} 
            likes={project.likes}
            changeLikes={props.changeLikes}/>
        )}
      </div>
    </div>
  );
}
Projects.propTypes={
  changeLikes: PropTypes.func,
  projectsList: PropTypes.array
};

export default Projects;