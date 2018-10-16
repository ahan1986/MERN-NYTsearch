import React, { Component } from 'react';
import './Result.css';

export default class Result extends Component {
    state = {
        article: [],
    }

  render() {
    return (
      <div>
        {this.state.article.length !== 0 ? (
            this.state.article.map((saved, i) => (
                <div key={i}>
                    {saved}
                </div>
            ))
        ) : (
            <div>
                Hello
            </div>
        )}
      </div>
    )
  }
}
