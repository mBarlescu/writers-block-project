import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';


import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Error from './components/Errors/RouteError';
import NavBar from './components/Navigation/NavBar';
import Stories from './components/Stories/Stories';

class App extends Component {
constructor(){
  super();

    this.state = {
      stories: [],
      users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/users')
    .then(res => {
      console.log(res)
      this.setState({users: res.data})
    })
    .catch(err => {
      console.log('AAAAAAAA', err)
    })

    axios.get('http://localhost:3000/api/stories')
    .then(res => {
      console.log(res)
      this.setState({stories: res.data})
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className='outer-container'>
          <NavBar />
          <Switch>

            <Route
            path='/'
            component={Home}
            exact />

            <Route path='/users'
            render={() => <Users stories={this.state.stories} users={this.state.users} />}/>

            <Route path='/stories'
             component={Stories} />

            <Route component={Error} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
