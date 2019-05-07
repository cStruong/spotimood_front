import React, {Component} from 'react'
import SongCard from './SongCard'

class PlaylistContainer extends Component {
  render(){
    return(
      <div>
        <h1>Mood: {this.props.mood}</h1>
        <h2>Genre: {this.props.genre}</h2>
        {this.props.songs.map(song =>
         <SongCard song={song} />)}
      </div>
    )
  }
}

export default PlaylistContainer;
