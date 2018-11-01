import React, { Component } from 'react';
import FrontPage from './component/index';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Switch>
          <Route exact path="/" component={FrontPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
