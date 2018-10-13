import React, { Component } from 'react';
import Navbar from './component/navbar';
import Search from './component/search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default App;
