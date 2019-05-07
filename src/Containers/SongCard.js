import React from 'react'

const SongCard = props => {
    return(
      <div>
        {props.song.title}
        {props.song.artist}
        <a href={props.song.url}>Music Video</a>
      </div>
    )
  }

export default SongCard;
