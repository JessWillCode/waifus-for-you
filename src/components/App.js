import React from 'react';
import '../../src/index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Home from './Home';
import Maid from './Maid';
// import Waifu from './Waifu';

function App() {

  return (
    <div className="App">
        <Header />
    
    <Switch>
      <Route path='/home/waifu'>
        {/* <Waifu /> */}
      </Route>

      <Route path='/home/maid'>
        <Maid />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/'>
        <Redirect to='/home'/>
      </Route>
    </Switch>
    </div>
  );
}


export default App;