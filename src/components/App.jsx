import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;