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
            <div>
                Create a New Form:
                <form onSubmit={(event) => {this.props.onSubmitHandler(event, this.state)}}>
                    <label>Title:</label>
                    <input onChange={this.onChangeHandler} type="textfield" name="title" value={this.state.title}/>
                    <label>Mood:</label>
                    <select onChange={this.onChangeHandler} name="mood" value={this.state.mood}>
                        <option>Choose a Mood</option>
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Lit">Lit</option>
                        <option value="Angry">Angry</option>
                        <option value="Relaxed">Relaxed</option>
                    </select>
                    <label>Genre:</label>
                    <select onChange={this.onChangeHandler} name="genre" value={this.state.genre}>
                        <option>Choose a Genre</option>
                        <option value="Country">Country</option>
                        <option value="Hip hop">Hip hop</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default NewThemeForm;