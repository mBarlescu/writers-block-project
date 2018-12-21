import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from './User'

const UsersPage = (props) => {

  if (!props.stories[`${props.match.params.id}`]) {
    return null;
  }

    let userId = props.match.params.id
    console.log(typeof userId);
    const userIdInt = Number.parseInt(userId)
    console.log(typeof userIdInt)
    console.log(userIdInt)
    const allStories=props.stories
    const allUsers=props.users
    console.log(props)

    allUsers.sort(function(a, b) {
      return a.id - b.id
    })

    allStories.sort(function (a, b) {
      return a.user_id - b.user_id
    })

    console.log('sroted list of users based on their id', allUsers)

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

    console.log('binary search for a user based on their id', user_binary_search(allUsers, userIdInt))
    console.log('binary search for a story based on their id', story_binary_search(allStories, userIdInt))



    const listOfUsers= allUsers.map((user, index) => {
      return <User story={allStories[index]} key={index} user={user} />
    });
  return (
    <div className='container my-container'>
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='row justify-content-around my-row'>

        </div>
      </div>
    </div>
  )
}



export default UsersPage;