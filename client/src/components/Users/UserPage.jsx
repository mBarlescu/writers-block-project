import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from './User'
import RouteError from '../Errors/RouteError'

const UsersPage = (props) => {

  let userId = props.match.params.id
  const userIdInt = Number.parseInt(userId)
  const allStories=props.stories
  const allUsers=props.users


  allUsers.sort(function(a, b) {
    return a.id - b.id
  })

  allStories.sort(function (a, b) {
    return a.user_id - b.user_id
  })

  const user_binary_search = (arr, value) => {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    while ( low <= high ) {
      mid = Math.floor((high + low) / 2)
      if(arr[mid].id === value){
        return arr[mid];
      } else if (value > arr[mid].id){
        low = mid + 1;
      } else {
        high =mid - 1;
      }
    }
    return -1
  }

  const story_binary_search = (arr, value) => {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    while ( low <= high ) {
      mid = Math.floor((high + low) / 2)
      if(arr[mid].user_id === value){
        return arr[mid];
      } else if (value > arr[mid].id){
        low = mid + 1;
      } else {
        high =mid - 1;
      }
    }
    return -1
  }


  if (user_binary_search(allUsers, userIdInt) === -1) {
    return <RouteError />;
  }

  return (
    <div className='container my-container'>
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='row justify-content-around my-row'>
        <User story={story_binary_search(allStories, userIdInt)} user={user_binary_search(allUsers, userIdInt)} />
        </div>
      </div>
    </div>
  )
}



export default UsersPage;