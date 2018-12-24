import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';


import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Error from './components/Errors/RouteError';
import NavBar from './components/Navigation/NavBar';
import Stories from './components/Stories/Stories';
import UserPage from './components/Users/UserPage'

class App extends Component {
constructor(){
  super();

    this.state = {
      stories: {
        popular_stories: [],
        newest_stories: []
      },
      users: []
    };
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT APP')
    axios.get('http://localhost:3000/api/users')
    .then(res => {
      console.log("USEEEEERS", res)
      this.setState({users: res.data})
    })
    .catch(err => {
      console.log('AAAAAAAA', err)
    })

    axios.get('http://localhost:3000/api/stories')
    .then(res => {
      console.log("STOOOOOOORIES",res)
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
            render={(props) => <Home {...props} stories={this.state.stories} users={this.state.users} />}
            exact />

            <Route
            path='/users'
            render={(props) => <Users {...props} stories={this.state.stories} users={this.state.users} />}
            exact/>

            <Route
            path='/stories'
            component={Stories} />


            <Route
            path='/users/:id'
            render={(props) => <UserPage {...props} stories={this.state.stories} users={this.state.users} /> } />

            <Route component={Error} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
