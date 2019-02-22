import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

var divStyle={
  backgroundColor: '#e3ecf9',
  width:'100%',
  height: 2000
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
            technologies={project.technologies}
            link={project.link}
            key={index} />
        )}
      </div>
    </div>
  );
}
Projects.propTypes={
  projectsList: PropTypes.array
};

export default Projects;