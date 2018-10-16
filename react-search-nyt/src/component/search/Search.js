import React, { Component } from 'react'
import './Search.css';
import axios from 'axios';

export default class Search extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
    }

    handleInputChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        const APIKey = "1a45a81e8e1a4f8fafd77681279d4998";
        axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + "&q=" + this.state.topic)
        .then(res => {
            console.log("response promise");
            console.log(res);
        })
        .catch(err => {
            console.log("response catching an error");
            console.log(err);
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Search</h3>
                </div>
                <div className="card-body">
                    <p className="card-title">Topic</p>
                    <input 
                        value={this.state.topic}
                        name="topic"
                        type="text"
                        onChange={this.handleInputChange}
                    />
                    <p className="card-title">Start Year</p>
                    <input 
                        value={this.state.startYear}
                        name="startYear"
                        type="text"  
                        onChange={this.handleInputChange}                     
                    />
                    <p className="card-title">End Year</p>
                    <input 
                        value={this.state.endYear}
                        name="endYear"
                        type="text"
                        onChange={this.handleInputChange}
                    />

                    <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}
