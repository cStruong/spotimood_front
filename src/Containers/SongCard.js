import React from 'react'

const SongCard = props => {
    return(
      <div className="songcard"> 
        {props.song.title}&nbsp;
        {props.song.artist}&nbsp;
        <iframe width="560" height="315" src={props.song.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  <br></br>
      </div>
    )
  }

export default SongCard;
