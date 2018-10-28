import React, { Component } from 'react';
import './Result.css';
import { connect } from 'react-redux';

import API from '../../utils/API';


class Result extends Component {

    // method that will make api calls to the server using AXIOS to post the title and description to the database to save
    saveResult = () => {
        console.log('clicked on saveResult');
        //make api call to AXIOS
        API.saveResults({
            title: this.props.result.title,
            description: this.props.result.description
        })
            .then(res => console.log('saving results to database'))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.props.result);
        return (
            <div>
                {/* without anything in the state in redux, this.props.result will be undefined */}
                {this.props.result == undefined ? (
                    <div>
                        {/* if there's nothing in the state, this portion of the div will be displayed */}
                    </div>

                ) : (
                        <div className="card">
                            <div className="card-header">
                                <h3>Results</h3>
                            </div>

                            {this.props.result.map((saved, i) => (

                                <div className="card-bodyResult" key={i} onClick={this.saveResult}>
                                    <div className="card-title">
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