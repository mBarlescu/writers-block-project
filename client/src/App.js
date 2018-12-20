import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Error from './components/Errors/RouteError';
import NavBar from './components/Navigation/NavBar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route
            path='/'
            component={Home}
            //render={() => <Home getStories={this.getStories} />}
            exact />
            <Route path='/users' component={Users} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
