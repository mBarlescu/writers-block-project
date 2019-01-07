import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from './User'
import RouteError from '../Errors/RouteError'
import axios from 'axios';
import UserStories from '../Stories/UserStories';

class UsersPage extends Component {
  constructor(props){
    super(props);

    this.state={
      data:{
        author:{},
        author_stories: [],
        number_of_followers: {},
        relationship: {}
      }
    }

    this.handleUserFollow = this.handleUserFollow.bind(this);


  let userId = props.match.params.id
  const userIdInt = Number.parseInt(userId)
  const allStories=props.stories
  const allUsers=props.users
  console.log('userpage props', props)

axios.get(`http://localhost:3000/api/users/${userId}`)
.then(res => {
  console.log('user page get request', res)
  this.setState({data: res.data})
  console.log('userpage state', this.state)
})


}

getAuthorImage(){
  console.log('author image', this.state)
  return this.state.data.author.image
}

  // allUsers.sort(function(a, b) {
  //   return a.id - b.id
  // })

  // allStories.sort(function (a, b) {
  //   return a.user_id - b.user_id
  // })

  // const user_binary_search = (arr, value) => {
  //   let high = arr.length - 1;
  //   let low = 0;
  //   let mid = 0;

  //   while ( low <= high ) {
  //     mid = Math.floor((high + low) / 2)
  //     if(arr[mid].id === value){
  //       return arr[mid];
  //     } else if (value > arr[mid].id){
  //       low = mid + 1;
  //     } else {
  //       high = mid - 1;
  //     }
  //   }
  //   return -1
  // }


  // const story_search = (arr, value) => {
  //   return arr.filter(element => element.user_id === value);
  // }

  // console.log('STORIES HERE', story_search(allStories, userIdInt));
  // console.log('USERS HERE', user_binary_search(allUsers, userIdInt));

  // if (user_binary_search(allUsers, userIdInt) === -1) {
  //   return <RouteError />;
  // }


  listOfStories(){
    const authorStories = this.state.data.author_stories;
    return authorStories.map((story, index) => {
      return  <UserStories key={index} author={this.state.data.author} author_stories={story} />
    })
  }

  handleUserFollow(event){
    event.preventDefault();
    console.log('handling follow button', event.target);
    let user_id = this.state.data.author.id;

    axios.post(`http://localhost:3000/api/users/${user_id}/relationships`)
      .then(res => {
        console.log('followers post', res);
        console.log('followers post 2', res.data);
        this.refreshUserFollowers(res.data)
      })
  }

  refreshUserFollowers(resData){
    console.log('are we hitting refresh for followers?', resData);
    console.log('check state before refresh followers', this.state);
    this.state={
      data:{
        ...this.state.data,
        number_of_followers: resData,
      },
    }
    this.setState({
      data: {
        ...this.state.data
      },
    })
    console.log('state after refresh followers', this.state)
  }

  render(){
    return (
      <div className='container my-container'>
        <div className='row'>
          <div className='col-2 authorImg-col-userpage test-col-1'>
            <img className="authorImg-userpage" src={this.getAuthorImage()} />
          </div>
          <div className='col-8 description-col-userpage test-col-1'>
            <h2 className='auther-name-userpage'>
              {this.state.data.author.first_name} {this.state.data.author.last_name}
            </h2>
            <div className='description-userpage'>
              {this.state.data.author.description}
            </div>
          </div>
          <div className='col-2 likes-col-userpage test-col-1'>
            <span>Followers: {this.state.data.number_of_followers.number}</span>
            <button onClick={this.handleUserFollow}>Follow</button>
            <br />
            <br />
            <button>My Drafts</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 test-col-2'>
            <h2> My Works </h2>
            <div>
              {this.listOfStories()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default UsersPage;