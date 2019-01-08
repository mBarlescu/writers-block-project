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
import UpdateStory from './components/Stories/UpdateStory';
import ReadPage from './components/Stories/ReadPage';
import Login from './components/Login/Login';
import FindByGenre from './components/FindByGenre/FindByGenre';


class App extends Component {
constructor(){
  super();

    this.state = {
        stories: {
        popular_stories: [],
        newest_stories: []
      },
      users: [],
      currentUser: {}
    };

    this.validateUserSession = this.validateUserSession.bind(this);
  }

  validateUserSession(onSuccess, onFailure) {
    axios.get(`http://localhost:3000/api/sessions`)
     .then(res => {
       console.log("Session App", res.data)
       this.setState({ currentUser:{
        id: res.data.id,
        firstName: res.data.first_name,
        lastName: res.data.last_name
      } });
      if(onSuccess !== undefined) {
        onSuccess();
      }

     })
     .catch(err => {
       console.log('Error', err);
       this.setState({ currentUser:{} });
       if(onFailure !== undefined) {
        onFailure();
      }
     })
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT APP1')
     axios.get('http://localhost:3000/api/users')
    .then(res => {
      console.log("USEEEEERS", res)
      this.setState({users: res.data})
      // this.setUser(res.data)
    })
    .catch(err => {
      console.log('AAAAAAAA', err)
    })

    axios.get('http://localhost:3000/api/stories')
    .then(res => {
      console.log("STOOOOOOORIES",res)
      this.setState({stories: res.data})
    })
    // console.log("WHERE IN APPJS IS STATE", this.state)

    this.validateUserSession();
    console.log("WHERE IN APPJS IS STATE", this.state)
  }

  // setUser(resData){
  //   this.state = {
  //       stories: {
  //         ...this.state.stories
  //       },
  //       users: resData,
  //       currentUser: this.state.currentUser
  //   }
  //   this.setState({
  //     stories: {
  //         ...this.state.stories
  //       },
  //       users: this.state.users,
  //       currentUser: this.state.currentUser
  //   })
  //   console.log('WHAT IS THIS STATE?!!?!?! ', this.state)

  // }


  render() {
    return (
      <BrowserRouter>
        <div>
        <NavBar users={this.state.users} currentUser={this.state.currentUser}   validateUserSession={this.validateUserSession}/>
        <div className='container'>

          <Switch>

            <Route
            path='/'
            render={(props) => <Home />}
            exact />

            <Route
            path='/login'
            render={(props) => <Login {...props} validateUserSession={this.validateUserSession} />}
            exact />

            <Route
            path='/users'
            render={(props) => <Users {...props}  users={this.state.users} />}
            exact/>

            <Route
            path='/stories'
            component={Stories}
            exact />

            <Route
            path='/users/:id'
            render={(props) => <UserPage {...props} validateUserSession={this.validateUserSession} /> }
            exact />

            <Route
            path='/genres/:id'
            render={(props) => <FindByGenre {...props} /> }
            exact />
      

            <Route
            path='/stories/new'
            render={(props) => <NewStory {...props}  />}
            exact />

            <Route
            path='/stories/:id'
            render={(props) => <StoryPage {...props}  validateUserSession={this.validateUserSession}/>}
            exact />

            <Route
            path='/stories/:id/create'
            render={(props) => <CreateStory {...props}  validateUserSession={this.validateUserSession} />}
            exact/>

            <Route
            path='/stories/:id/update'
            render={(props) => <UpdateStory {...props}  validateUserSession={this.validateUserSession} />}
            exact/>

            <Route
            path='/users/:id/drafts'
            render={(props) => <DraftsPage {...props} stories={this.state.stories} users={this.state.users} />}
            exact />

            <Route
            path='/stories/:id/edit'
            render={(props)=> <EditPage {...props}  />}
            exact />

            <Route
            path='/stories/:id/read'
            render={(props)=> <ReadPage {...props} validateUserSession={this.validateUserSession} />}
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