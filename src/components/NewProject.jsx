import React from 'react';
import PropTypes from 'prop-types';

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
      link: _link.value  
    });

    _name.value = '';
    _description.value = '';
    _technologies.value = '';
    _link.value ='';
  }

  return (
    <div>
      <form onSubmit={handleNewProjectSubmission}>
        <h4>Add new project</h4>
        <input type="text"
          id="name"
          placeholder="Name"
          ref={input=>{
            _name = input;
          }}
        />
        <textarea
          id="description"
          placeholder="description goes here"
          ref={textarea=>{
            _description = textarea;
          }}
        />
        <input type="text"
          id="technologies"
          placeholder="technologies"
          ref={input=>{
            _technologies = input;
          }}
        />
        <input type="text"
          id="link"
          placeholder="link"
          ref={input=>{
            _link = input;
          }}
        />
        <button type= "submit">Add!</button>
      </form>
    </div>
  );
}

NewProject.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default NewProject;