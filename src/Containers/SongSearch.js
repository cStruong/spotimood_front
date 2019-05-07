import React from 'react'

const SongSearch = (props) => {
  return (
    <div>
      <input onChange={props.handleChange}   type="text"
        placeholder={"Search for a song"} />
    </div>
  )
}

export default SongSearch;
