import React, { Component } from 'react'
import './Search.css';
// import axios from 'axios';

import { connect } from 'react-redux';

import { searchPost } from '../../actions/actions';

class Search extends Component {
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

    handleFormSubmit = e => {
        e.preventDefault();

        const post = {
            topic: this.state.topic,
            startYear: this.state.startYear,
            endYear: this.state.endYear,
        }

        this.props.searchPost(post);
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

export default connect(null, {searchPost})(Search);