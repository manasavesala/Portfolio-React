import React from 'react';
import Project from './Project';
import grace from '../assets/images/homebg2.jpg';
import bg from '../assets/images/homebg1.jpg';
var divStyle={
    backgroundImage: 'url('+bg+')',
    height:700,
    width:'100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

var projectsList = [
  {
    name: 'Project Name',
    description: 'description',
    image: grace,
    link: '/gracehopper'
  },
  {
    name: 'Project Name',
    description: 'description',
    image: grace,
    link: '/katherinejohnson'
  },
  {
    name: 'Project Name',
    description: 'description',
    image: grace,
    link: '/hedylamarr'
  },
  {
    name: 'Project Name',
    description: 'description',
    image: grace,
    link: '/adalovelace'
  },
  {
    name: 'Project Name',
    description: 'description',
    image: grace,
    link: '/hedylamarr'
  },
  {
    name: 'Project Name',
    description: 'description',
    image: grace,
    link: '/adalovelace'
  }
];

function Projects() {
  return (
    <div style={divStyle}>
      <hr />
      {projectsList.map((project, index) =>
        <Project name={project.name}
          description={project.description}
          image={project.image}
          link={project.link}
          key={index} />
      )}
    </div>
  );
}

export default Projects;