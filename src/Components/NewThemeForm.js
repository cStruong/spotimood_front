import React from 'react';

class NewThemeForm extends React.Component {

    state = {
        title: "",
        mood: "",
        genre: ""
    }

    componentDidMount() {
        fetch("http://localhost:3005/songs")
            .then(response => {
                return response.json();
            })
            .then(parsedSongs => {
                this.setState({
                    allSongs: parsedSongs
                })
            })
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        fetch("http://localhost:3005/themes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                title: this.state.title,
                mood: this.state.mood,
                genre: this.state.genre
            })
        })
            .then(response => {
                return response.json();
            })
            .then(parsedTheme => {
                console.log(parsedTheme)
                console.log(parsedTheme.id)
            }) 
    }



    render() {
        return (
            <div>
                Create a New Form:
                <form onSubmit={this.onSubmitHandler}>
                    <label>Title:</label>
                    <input onChange={this.onChangeHandler} type="textfield" name="title"/>
                    <label>Mood:</label>
                    <select onChange={this.onChangeHandler} name="mood">
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Lit">Lit</option>
                        <option value="Angry">Angry</option>
                        <option value="Relaxed">Relaxed</option>
                    </select>
                    <label>Genre:</label>
                    <select onChange={this.onChangeHandler} name="genre">
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