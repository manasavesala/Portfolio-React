import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import { Link } from 'react-router-dom';

function NewProject(props) {
  let _name = null;
  let _description = null;
  let _technologies = null;
  let _link = null;

  function handleNewProjectSubmission(event){
    event.preventDefault();
    props.onNewProjectCreation({
      name: _name.value,
      description: _description.value,
      technologies: _technologies.value,
      link: _link.value,
      id: v4()  
    });

    _name.value = '';
    _description.value = '';
    _technologies.value = '';
    _link.value ='';
  }
  var sh1={
    textAlign:'center'
  };
  return (
    <div style={sh1}>
    <hr/>
      <form onSubmit={handleNewProjectSubmission}>
        <h1 style={sh1}>Add new project</h1>
        <br/><br/>
        Project Name: 
        <input type="text"
          id="name"
          placeholder="Name"
          ref={input=>{
            _name = input;
          }}
        /><br/><br/>
        Description: 
        <textarea
          id="description"
          placeholder="description goes here"
          ref={textarea=>{
            _description = textarea;
          }}
        /><br/><br/>
        Technologies: 
        <input type="text"
          id="technologies"
          placeholder="technologies"
          ref={input=>{
            _technologies = input;
          }}
        /><br/><br/>
        Project Link: 
        <input type="text"
          id="link"
          placeholder="link"
          ref={input=>{
            _link = input;
          }}
        /><br/><br/>
        <button type= "submit">Add!</button>
      </form>
      <br />
      <h2><Link style={{textDecoration: 'none', color: 'black'}} to="/projects" >View Projects</Link></h2>      
    </div>
  );
}

NewProject.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default NewProject;