import React from 'react'

const SongSearch = (props) => {
  return (
    <div className="searchform">
      <input style={{ width: 500, height: 35 }} onChange={props.handleChange}   type="text"
        placeholder={"Search for a song"} />
    </div>
  )
}

export default SongSearch;
