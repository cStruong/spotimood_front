import React from 'react';

class NewThemeForm extends React.Component {

    state = {
        title: "",
        mood: "",
        genre: ""
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="themeform">
                <h1>New Playlist</h1>
                <form onSubmit={(event) => {this.props.onSubmitHandler(event, this.state)}}>
                    <label>Title:</label><br></br>
                    <input onChange={this.onChangeHandler} type="textfield" className="songformfield" name="title" value={this.state.title}/><br></br>
                    <br></br><label>Mood:</label><br></br>
                    <select onChange={this.onChangeHandler}  name="mood" value={this.state.mood}><br></br>
                        <option>Choose a Mood</option>
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Lit">Lit</option>
                        <option value="Angry">Angry</option>
                        <option value="Relaxed">Relaxed</option>
                    </select>
                    <br></br><br></br><label>Genre:</label>
                    <br></br><select onChange={this.onChangeHandler} name="genre" value={this.state.genre}>
                        <option>Choose a Genre</option>
                        <option value="Country">Country</option>
                        <option value="Hip hop">Hip hop</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                    </select>
                    <br></br><br></br><button className="button1" type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default NewThemeForm;
