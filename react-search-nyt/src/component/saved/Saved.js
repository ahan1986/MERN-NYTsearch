import React, { Component } from 'react';
import './Saved.css';

export default class Saved extends Component {

    state = {
        results: [],
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
