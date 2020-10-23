import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import New from './components/New'
import Edit from './components/Edit'
import Show from './components/Show'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route render={({location}) => (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
        <section className="route-section">
          <Switch location={location}>
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/new' component={New} />
            <Route exact path='/edit/:id' component={Edit} />
            <Route path='/notes/:id' component={Show} />
            <Route exact path='/' component={Login} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </section>
        </CSSTransition>
      </TransitionGroup>
      )} />
    </div>                 
  );
}

export default App;
