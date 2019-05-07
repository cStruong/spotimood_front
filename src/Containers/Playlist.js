import React from 'react'
import SongForm from './SongForm.js'
import PlaylistContainer from './PlaylistContainer'

class Playlist extends React.Component {
    state = {
      songs: [],
      theme: {}
    }

    componentDidMount(){
    fetch(`localhost:3005/playlists`)
    .then((response) => {
      return response.json()
    })
    .then((playlistObjs) => {
      playlistObjs.map(playlist => {
      if(playlist.theme_id === this.props.id){
        let song = playlist.song
        this.setState({
          songs: [song,...this.state.songs],
          theme: playlist.theme
        })
      } })
    })
    }

    handleSubmit = (event, song) => {
      event.preventDefault()
      this.setState({
        songs: [song,...this.state.songs]
      })
      fetch("http://localhost:3005/playlists", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          theme
        })
      })
    }

    render() {
        return (
            <div>
              <SongForm handleSubmit={this.handleSubmit}/>
              <PlaylistContainer mood={this.state.theme.mood} genre={this.state.theme.genre} songs={this.state.songs}/>
            </div>
        )
    }
}

export default Playlist
