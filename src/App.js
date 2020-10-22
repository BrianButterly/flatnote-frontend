import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import New from './components/New'
import Edit from './components/Edit'
import Show from './components/Show'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Note from './components/Note'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/new' component={New} />
        <Route exact path='/notes' component={Note} />
        <Route exact path='/edit/:id' component={Edit} />
        <Route path='/notes/:id' component={Show} />
        <Route exact path='/' component={Login} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </div>                 
  );
}

export default App;
