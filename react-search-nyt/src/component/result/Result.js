import React, { Component } from 'react';
import './Result.css';
import { connect } from 'react-redux';


class Result extends Component {
    render() {
        console.log(this.props.result);
        return (
            <div>
                {/* without anything in the state in redux, this.props.result will be undefined */}
                {this.props.result.length == undefined ? (
                    <div>
                        {/* if there's nothing in the state, this portion of the div will be displayed */}
                    </div>

                ) : (
                        <div className="card">
                            <div className="card-header">
                                <h3>Results</h3>
                            </div>

                            {this.props.result.map((saved, i) => (

                                <div className="card-body" key={i}>
                                    <div className="card-title">
                                        {/* had to specify author because react could not display the whole object onto the screen */}
                                        {saved.title}
                                    </div>
                                </div>

                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    result: state.newReducer.findTopic,
});

export default connect(mapStateToProps)(Result);