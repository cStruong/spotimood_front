import React from 'react'
import { Link } from 'react-router-dom'

const ThemeCard = (props) => {
    return (
        <li onClick={() => props.onHandleClick(props.themeObj.id)} className="themecard">
            <Link to={`/themes/${props.themeObj.id}`}>{props.themeObj.title}</Link>
        </li>

    );
};

export default ThemeCard;
