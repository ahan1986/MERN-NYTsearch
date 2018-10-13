import React, { Component } from 'react'
import './Search.css';

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

        console.log(this.state.topic);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Search</h3>
                </div>
                <div className="card-body">
                    <p className="card-title">Topic</p>
                    <input 
                        placeholder="Topic"
                        value={this.state.topic}
                        name="topic"
                        onChange={this.handleInputChange}
                        type="text"
                    />
                    <p className="card-title">Start Year</p>
                    <p className="card-title">End Year</p>
                </div>
            </div>
        )
    }
}
