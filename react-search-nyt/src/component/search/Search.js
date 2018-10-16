import React, { Component } from 'react'
import './Search.css';
// import axios from 'axios';
import NewsAPI from 'newsapi';

export default class Search extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        results: [],
    }

    handleInputChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        const newsapi = new NewsAPI("1a45a81e8e1a4f8fafd77681279d4998");
        // using newsapi package to get news information from the query that was typed in the topic input section.
        newsapi.v2.topHeadlines({
            sources: 'bbc-news, the-verge',
            q: this.state.topic,
        }).then(res => {
            console.log("made correct api call to news sources");
        //setState the response to results in the state.
            this.setState({
                results: res.articles
            })
            console.log(this.state.results)
        }).catch(err => {
            console.log(err);
            console.log("there was an error");
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
