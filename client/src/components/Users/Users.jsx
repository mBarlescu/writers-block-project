import React from 'react';
import User from './User'

const Users = (props) => {
  console.log(props.stories)
  if (!props.stories[0]) {
    return null;
  }
    const allStories=props.stories
    const allUsers=props.users
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


export default Users;