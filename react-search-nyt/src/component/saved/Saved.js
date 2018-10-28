import React, { Component } from 'react';
import './Saved.css';

import API from '../../utils/API';

export default class Saved extends Component {

    state = {
        results: []
    } 

    componentDidMount() {
        API.loadResults()
        .then(res => this.setState({ results:res.data }))
        .catch(err => console.log(err));
    }

    //method that will make api call to the server using AXIOS to load all the title and description that were saved to the database.
    loadResult = () => {
        //make api call to AXIOS
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>
                        Saved Results
                    </h3>
                </div>

                <div className="card-body">
                    {this.state.results.length !== 0 ? (
                        this.state.results.map(saved => (
                            <div className="saved-group-container">
                                {/* if there is something in results this will be displayed */}
                            </div>
                        ))
                    ) : (
                            <h2>
                                Nothing saved to the results!
                </h2>
                        )}
                </div>
            </div>
        )
    }
}
