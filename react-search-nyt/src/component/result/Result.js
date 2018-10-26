import React, { Component } from 'react';
import './Result.css';
import { connect } from 'react-redux';


class Result extends Component {
    state = {
        article: [],
    }

  render() {
      console.log(this.props.result);
    return (
      <div>
          {/* without anything in the state in redux, this.props.result will be undefined */}
        {this.props.result.length == undefined ? (
            <div>
                Hello
            </div>

        ) : (
            this.props.result.map((saved, i) => (
                <div key={i}>
                    {/* had to specify author because react could not display the whole object onto the screen */}
                    {saved.author}
                </div>
        )))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    result: state.newReducer.findTopic,
});

export default connect(mapStateToProps)(Result);