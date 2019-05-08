import React, {Component} from 'react';
import SongCard from './SongCard';
import cdimage from '../assets/cdimage.png';

class PlaylistContainer extends Component {
  render(){
    return(
      <div className="playlistcontainer">
        <div className="playlisttitle">
        <img className="cdimage" src={cdimage} />      
          Mood: {this.props.mood} &emsp;
          Genre: {this.props.genre}
        </div>
        {this.props.songs.map(song =>
         <SongCard song={song} />
         )}
      </div>
    )
  }
}

export default PlaylistContainer;
