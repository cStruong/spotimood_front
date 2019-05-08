import React from 'react'

const SongCard = props => {
    return(
      <div className="songcard"> 
        <div className="cardinfo">
        <p>Title: {props.song.title}</p>
        <p>Artist: {props.song.artist}</p>
        </div>
        <div className="videos">
        <iframe width="250" height="150" src={props.song.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  <br></br>
        </div>
      </div>
    )
  }

export default SongCard;
