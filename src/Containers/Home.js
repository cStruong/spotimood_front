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

    render() {
        return (
            <div>
                <div>
                    THEMELIST CONTAINER
                    <Themelist themes={this.state.themes}/>
                </div>

                <div> 
                    NEW THEME CONTAINER
                    <NewThemeForm />
                </div>
            </div>
        )
    }
}

export default Home;