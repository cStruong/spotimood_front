import React from 'react'

import ThemeCard from './ThemeCard.js'

const Themelist = (props) => {
    return (
        <div className="appcolumn left">
        <h1>Playlists</h1>
        <ul>
        {props.themes.map(themeObj =>
            <ThemeCard onHandleClick={props.onHandleClick} themeObj={themeObj}/>
         )
        }
        </ul>
        </div>
    )
}

export default Themelist
