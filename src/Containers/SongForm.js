import React, {Component} from 'react'

class SongForm extends Component {
  state = {
    title: "",
    artist: "",
    mood: "",
    genre: "",
    url: ""
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
}

  render(){
    return(
      <div className="songform">
      <h1> Add A Song </h1>
      <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
        Title:<input onChange={this.handleChange} type="textfield" label="title" name="title" value={this.state.title}/>
        <br></br>
        <br></br>
        Artist(s):<input onChange={this.handleChange} type="textfield" label="artist" name="artist" value={this.state.artist}/>
        <br></br>
        <br></br>
        <label>Mood:</label>
        <select onChange={this.handleChange} type="textfield" label="mood" name="mood" value={this.state.mood}>
          <option>Choose a Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Lit">Lit</option>
          <option value="Angry">Angry</option>
          <option value="Relaxed">Relaxed</option>
        </select>
        <br></br>
        <br></br>
        <label>Genre:</label>
        <select onChange={this.handleChange} type="textfield" label="genre" name="genre" value={this.state.genre}>
          <option>Choose a Genre</option>
          <option value="Country">Country</option>
          <option value="Hip hop">Hip hop</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
        </select>
        <br></br>
        <br></br>
        YouTube URL:<input onChange={this.handleChange} type="textfield" label="url" name="url" value={this.state.url}/>
        <br></br>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}

export default SongForm;
