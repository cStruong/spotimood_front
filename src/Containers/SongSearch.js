import React from 'react'

const SongSearch = (props) => {
  return (
    <div className="searchform">
      <br></br>
      <input style={{ width: 500, height: 35, borderRadius: '100px'}} onChange={props.handleChange}   type="text"
        placeholder={"Search for a song"} />
    </div>
  )
}

export default SongSearch;
