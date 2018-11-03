import React, { Component } from 'react';
import './Result.css';
import { connect } from 'react-redux';

import API from '../../utils/API';


class Result extends Component {

    // method that will make api calls to the server using AXIOS to post the title and description to the database to save
    saveResult = (e) => {
        console.log('clicked on saveResult');
        // console.log(this.props.result[i].title);
        console.log(e);
        // using the id through value in each div to pin point where the user clicked to find the right article to put into the database
        const t = e.target;
        //make api call to AXIOS
        API.saveResults({
            title: this.props.result[0].title,
            description: this.props.result[0].description
        })
            .then(res => console.log('saving results to database'))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {/* without anything in the state in redux, this.props.result will be undefined */}
                {this.props.result === undefined ? (
                    <div>
                        {/* if there's nothing in the state, this portion of the div will be displayed */}
                    </div>

                ) : (
                        <div className="card">
                            <div className="card-header">
                                <h3>Results</h3>
                            </div>

                            {this.props.result.map((saved, i) => (
                                // need to pass onClick to a function so that saveResult() is not called the amount of times map is being rendered.  You can just do saveResult but to pass parameters, you need to () => this.saveResult(i)
                                <div className="card-bodyResult" key={i} onClick={() => this.saveResult(i)}>
                                    <div key={i} className="card-title">
                                        {/* had to specify author because react could not display the whole object onto the screen */}
                                        <h4><a href={saved.url}>{saved.title}</a></h4>
                                    </div>
                                    <div>
                                        {saved.description}
                                    </div>
                                    <hr />
                                </div>

                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    result: state.newReducerFromIndexjsWithcombineReducers.findTopicFromSwitchStatementInNewReducerjs,
});

export default connect(mapStateToProps)(Result);