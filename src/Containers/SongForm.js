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
      <div>
      <h1> Add A Song </h1>
      <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
        Title:<input onChange={this.handleChange} type="textfield" label="title" name="title" value={this.state.title}/>
        Artist(s):<input onChange={this.handleChange} type="textfield" label="artist" name="artist" value={this.state.artist}/>
        Mood:<input onChange={this.handleChange} type="textfield" label="mood" name="mood" value={this.state.mood}/>
        Genre:<input onChange={this.handleChange} type="textfield" label="genre" name="genre" value={this.state.genre}/>
        YouTube URL:<input onChange={this.handleChange} type="textfield" label="url" name="url" value={this.state.url}/>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}

export default SongForm;
