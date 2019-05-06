import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './Containers/Home.js'
import Playlist from './Containers/Playlist.js'

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          HEADER/LOGO BAR THING FOR LOGIN AND STUFF
        </div>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/users/:id" component={Playlist} />
        </Switch>

      </div>
    )
  }
}

export default App;
