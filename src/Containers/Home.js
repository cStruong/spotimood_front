import React from 'react'

import Themelist from '../Components/Themelist.js'
import NewThemeForm from '../Components/NewThemeForm.js'

class Home extends React.Component {

    state = {
        themes: [],
        allSongs: [],
        songs: []
    }

    componentDidMount() {
        fetch('http://localhost:3005/themes')
            .then(response => {
                return response.json();
            })
            .then(themeJSON => {
                this.setState({
                    themes: themeJSON
                })
            })

        fetch("http://localhost:3005/songs")
        .then(response => {
            return response.json();
        })
        .then(parsedSongs => {
            this.setState({
                allSongs: parsedSongs
            })
        })
    }

    onSubmitHandler = (event, stateObj) => {
        event.preventDefault();

        fetch("http://localhost:3005/themes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                stateObj
            )
        })
            .then(response => {
                return response.json();
            })
            .then(parsedTheme => {
                let newThemes = [parsedTheme,...this.state.themes]
                this.setState({
                    themes: newThemes
                })

                let filteredSongs = this.state.allSongs.filter(songObj =>
                    songObj.mood.includes(stateObj.mood) && songObj.genre.includes(stateObj.genre)
                )

                this.setState({
                    songs: filteredSongs
                })

                filteredSongs.forEach(songObj => {
                    let songid = songObj.id
                    fetch("http://localhost:3005/playlists", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            theme_id: parsedTheme.id,
                            song_id: songid
                        })
                    })
                })
            })
    }

    render() {
        return (
            <div class="row">
                <div class="column left">
                    <NewThemeForm onSubmitHandler={this.onSubmitHandler}/>

                </div>

                <div class="column right">
                    <Themelist onHandleClick={this.props.onHandleClick} themes={this.state.themes}/>
                </div>
            </div>
        )
    }
}

export default Home;
