import React from 'react'
import SongForm from './SongForm.js'
import PlaylistContainer from './PlaylistContainer'
import SongSearch from './SongSearch'

class Playlist extends React.Component {
    state = {
      songs: [],
      filteredSongs: [],
      theme: {}
    }

    themeId = () => {
      return parseInt(document.URL.split("/").pop())
    }

    componentDidMount(){
    fetch("http://localhost:3005/playlists")
    .then((response) => {
      return response.json()
    })
    .then((playlistObjs) => {
      playlistObjs.map(playlist => {
      if(playlist.theme_id === this.themeId()){
        let song = playlist.song
        this.setState({
          songs: [song,...this.state.songs],
          filteredSongs: [song,...this.state.filteredSongs],
          theme: playlist.theme
        })

      }})
    })
    }

    handleSubmit = (event, song) => {
      event.preventDefault()
      this.setState({
        songs: [song,...this.state.songs],
        filteredSongs: [song,...this.state.filteredSongs]
      })
      fetch("http://localhost:3005/playlists", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({

          theme_id: this.state.theme.id,
          theme: this.state.theme,
          song: song
        })
      })
    }


  handleChange = (event) => {
    let userSearch = event.target.value.toLowerCase()
    let searchArray = []
    let songList = [...this.state.songs]
    songList.map(song => {
      if(song.title.toLowerCase().includes(userSearch)){
        searchArray.push(song)
      }
    })
    this.setState({
      filteredSongs: searchArray
    })

  }
    render() {
        return (
            <div>
              <br></br>
              <br></br>
              <SongForm handleSubmit={this.handleSubmit}/>
              <SongSearch handleChange={this.handleChange} />
              <PlaylistContainer mood={this.state.theme.mood} genre={this.state.theme.genre} songs={this.state.filteredSongs}/>
            </div>
        )
    }
}

export default Playlist
