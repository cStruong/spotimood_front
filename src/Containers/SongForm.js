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
      <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
        <input onChange={this.handleChange} type="textfield" label="title" name="title" value={this.state.title}/>
        <input onChange={this.handleChange} type="textfield" label="artist" name="artist" value={this.state.artist}/>
        <input onChange={this.handleChange} type="textfield" label="mood" name="mood" value={this.state.mood}/>
        <input onChange={this.handleChange} type="textfield" label="genre" name="genre" value={this.state.genre}/>
        <input onChange={this.handleChange} type="textfield" label="url" name="url" value={this.state.url}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default SongForm;
