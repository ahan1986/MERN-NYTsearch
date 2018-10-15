import React, { Component } from 'react';
import Navbar from './component/navbar';
import Search from './component/search';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Switch>
          <Route exact path="/" component={Navbar} />
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
