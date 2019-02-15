import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />

      </Switch>
    </div>
  );
}

export default App;