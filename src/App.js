import React from 'react';
import logo from './logo.svg';
import './App.css';

import PlaylistContainer from './Components/PlaylistContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          HEADER/LOGO BAR THING FOR LOGIN AND STUFF
        </div>

        <div className="appcolumn right"> 
        SEARCH BAR PLAYLIST CONTAINER, MOODPLATLIST CONTAINER GOES HERE
        <PlaylistContainer />
        </div>
        
        <div className="appcolumn left">
          <div className="profilepic">
              PROFILE PICTURE BOX
          </div>
          
        PROFILE AND SUBMITTING NEW SONG GOES HERE
        </div>
      </div>
    )
  }
}

export default App;
