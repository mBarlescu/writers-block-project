import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
 } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  Row, Col } from 'reactstrap';
import axios from 'axios';


import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Error from './components/Errors/RouteError';
import NavBar from './components/Navigation/NavBar';
import Stories from './components/Stories/Stories';
import UserPage from './components/Users/UserPage';
import EditPage from './components/Stories/EditPage';
import DraftsPage from './components/Stories/DraftsPage';
import NewStory from './components/Stories/NewStory';
import StoryPage from './components/Stories/StoryPage';
import CreateStory from './components/Stories/CreateStory';
import ReadPage from './components/Stories/ReadPage';


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
        <div className='container my-container'>
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
            component={Stories}
            exact />

            <Route
            path='/users/:id'
            render={(props) => <UserPage {...props} stories={this.state.stories} users={this.state.users} /> }
            exact />

            <Route
            path='/stories/new'
            render={(props) => <NewStory {...props} stories= {this.state.stories} users={this.state.users} />}
            exact />

            <Route
            path='/stories/:id'
            render={(props) => <StoryPage {...props} stories= {this.state.stories} users={this.state.users} />}
            exact />

            <Route
            path='/stories/:id/create'
            render={(props) => <CreateStory {...props} stories= {this.state.stories} users={this.state.users} />}
            exact/>

            <Route
            path='/users/:id/drafts'
            render={(props) => <DraftsPage {...props} stories={this.state.stories} users={this.state.users} />}
            exact />

            <Route
            path='/stories/:id/edit'
            render={(props)=> <EditPage {...props} stories={this.state.stories} users={this.state.users} />}
            exact />

            <Route
            path='/stories/:id/read'
            render={(props)=> <ReadPage {...props} stories={this.state.stories} users={this.state.users} />}
            exact />

            <Route component={Error} />

          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;