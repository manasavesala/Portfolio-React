import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Error404 from './Error404';
import NewProject from './NewProject';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsList : [
        {
          name: 'TypeRacer',
          description: 'This is an online typing competition, TypeRacer, allows people to race against the computer.',
          technologies:'HTML,CSS,Angular 5,Firebase',
          link: 'https://typeracer-50606.firebaseapp.com/',
          likes: 3,
          id: '0'
        },
        {
          name: 'Job Search ',
          description: 'Allows users to input a single search term and view results from several job sites on a single page.',
          technologies:'HTML,CSS,Selenium WebDriver,ASP.Net Core MVC',
          link: 'https://github.com/manasavesala/JobSearch.Solution',
          likes: 2,
          id: '1'
        },
        {
          name: 'No Way Out',
          description: 'Text based horror adventure where while at home, your peaceful night turns into a nightmare when an unknown creature stalks you in your very own home.',
          technologies:'HTML,CSS,JavaScript,Bootstrap,jQuery',
          link:'http://maxdhs.github.io/no-way-out/',
          likes: 5,
          id: '2'
        },
        {
          name: 'Online Pizza Webpage',
          description: 'A a website for a pizza company where a user can choose one or more individual toppings and a size to order a pizza and see the final cost',
          technologies:'HTML,CSS,JavaScript,Bootstrap,jQuery',
          link: 'https://manasavesala.github.io/Pizza-Website/',
          likes: 4,
          id: '3'
        },
        {
          name: 'Hair Salon',
          description: 'MVC web application for a hair salon. where the owner should be able to add a list of the stylists, and for each stylist, add clients who see that stylist and view/add speciality and save that data into database.',
          technologies:'HTML,CSS,MAMP,MySQL,C#,.NET,ASP.Net Core MVC',
          link: 'https://github.com/manasavesala/HairSalon.Solution.git',
          likes:7,
          id: '4'
        },
        {
          name: 'Doctor LookUp',
          description: 'A website where the user can look up doctors in the portland area, based on name or a medical condition.',
          technologies:'HTML,CSS,JavaScript,node.js,npm',
          link: 'https://github.com/manasavesala/DoctorLookup-API-js.git',
          likes: 4,
          id: '5'
        }
      ]
    };
    this.handleAddingNewProjectToList = this.handleAddingNewProjectToList.bind(this);
    this.handleLikesChange = this.handleLikesChange.bind(this);
  }

  handleAddingNewProjectToList(newProject){
    var newProjectList= this.state.projectsList.slice();
    newProjectList.push(newProject);
    this.setState({projectsList: newProjectList});
  }

  handleLikesChange(id) {
    for(let Project of this.state.projectsList){
      if(Project.id === id) {
        Project.likes++;
        let newState = Object.assign({}, this.state.projectsList, Project);
        this.setState({newState});
      }
    }
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/projects' render={() => <Projects projectsList = {this.state.projectsList} changeLikes={this.handleLikesChange}/>} />
          <Route  path='/contact' component={Contact} />
          <Route  path='/about' component={About} />
          <Route  path='/new' render={() => <NewProject onNewProjectCreation={this.handleAddingNewProjectToList}/>}/>
          <Route component={Error404} />

        </Switch>
      </div>
    );
  }
}

export default App;