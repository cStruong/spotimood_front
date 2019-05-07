import React from 'react'

const SongCard = props => {
    return(
      <div>
        {props.song.title}&nbsp;
        {props.song.artist}&nbsp;
        <a href={props.song.url}>Music Video</a>
      </div>
    )
  }

export default SongCard;
