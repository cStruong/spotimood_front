import React from 'react'

const ThemeCard = (props) => {
    return (
        <div className="themecard">
            {props.themeObj.title}
        </div>

    )
}

export default ThemeCard;