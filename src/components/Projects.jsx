import React from 'react';
import Project from './Project';
import bg from '../assets/images/homebg1.jpg';

var divStyle={
  backgroundImage: 'url('+bg+')',
  height:950,
  width:'100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

var projectsList = [
  {
    name: 'TypeRacer',
    description: 'This is an online typing competition, TypeRacer, allows people to race against the computer.',
    technologies:'HTML,CSS,Angular 5,Firebase',
    link: 'https://typeracer-50606.firebaseapp.com/'
  },
  {
    name: 'Job Search ',
    description: 'Allows users to input a single search term and view results from several job sites on a single page.',
    technologies:'HTML,CSS,Selenium WebDriver,ASP.Net Core MVC',
    link: 'https://github.com/manasavesala/JobSearch.Solution'
  },
  {
    name: 'No Way Out',
    description: 'Text based horror adventure where while at home, your peaceful night turns into a nightmare when an unknown creature stalks you in your very own home.',
    technologies:'HTML,CSS,JavaScript,Bootstrap,jQuery',
    link:'http://maxdhs.github.io/no-way-out/'
  },
  {
    name: 'Online Pizza Webpage',
    description: 'A a website for a pizza company where a user can choose one or more individual toppings and a size to order a pizza and see the final cost',
    technologies:'HTML,CSS,JavaScript,Bootstrap,jQuery',
    link: 'https://manasavesala.github.io/Pizza-Website/'
  },
  {
    name: 'Hair Salon',
    description: 'MVC web application for a hair salon. where the owner should be able to add a list of the stylists, and for each stylist, add clients who see that stylist and view/add speciality and save that data into database.',
    technologies:'HTML,CSS,MAMP,MySQL,C#,.NET,ASP.Net Core MVC',
    link: 'https://github.com/manasavesala/HairSalon.Solution.git'
  },
  {
    name: 'Doctor LookUp',
    description: 'A website where the user can look up doctors in the portland area, based on name or a medical condition.',
    technologies:'HTML,CSS,JavaScript,node.js,npm',
    link: 'https://github.com/manasavesala/DoctorLookup-API-js.git'
  }
];

function Projects() {
  return (
    <div>
      <br/>
      <br/>
      <div style={divStyle}>
        <hr />
        {projectsList.map((project, index) =>
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

export default Projects;