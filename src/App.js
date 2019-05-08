import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

import Home from './Containers/Home.js'
import Playlist from './Containers/Playlist.js'

class App extends React.Component {

  state = {
    id: 0
  }

  onHandleClick = (themeId) => {

    this.setState({
      id: themeId
    })
  }

  render() {
    return (
      <div>
        <Link to={'/home'}><div className="header"></div></Link> 

        <Switch>
          <Route path="/home" render={(routerProps) => (<Home onHandleClick={this.onHandleClick} />)} />
          <Route path="/themes/:id" render={(routerProps) => (<Playlist id={this.state.id}/>)}
          />
        </Switch>

      </div>
    )
  }
}

export default App;
