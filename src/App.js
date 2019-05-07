import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './Containers/Home.js'
import Playlist from './Containers/Playlist.js'

class App extends React.Component {

  state = {
    id: 0
  }

  render() {
    return (
      <div>
        <div className="header">
        </div>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/themes/:id" render={(routerProps) => (<Playlist id={this.state.id}/>)}
          />
        </Switch>

      </div>
    )
  }
}

export default App;
