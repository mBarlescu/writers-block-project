import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from './User'

const UsersPage = (props) => {

  if (!props.stories[`${props.match.params.id}`]) {
    return null;
  }

    const userId = props.match.params.id
    console.log(props.match.params.id)
    const allStories=props.stories
    const allUsers=props.users
    console.log(props)

    allUsers.forEach(function (user) {
      console.log('this', user)
    })

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
        {listOfUsers}
        </div>
      </div>
    </div>
  )
}



export default UsersPage;