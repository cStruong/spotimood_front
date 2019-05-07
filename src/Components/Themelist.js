import React from 'react'

import ThemeCard from './ThemeCard.js'

const Themelist = (props) => {
    return (
        <div className="appcolumn left">
        {props.themes.map(themeObj => 
            <ThemeCard onHandleClick={props.onHandleClick} themeObj={themeObj}/>
         )
        }
        </div>
    )
}

export default Themelist