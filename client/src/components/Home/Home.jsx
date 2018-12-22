import React, { Component } from 'react';
import axios from 'axios';
import Story from '../Stories/Story'


function figureOutUser(users, user_id) {
  users.find(user => user.id === user_id);
}

class Home extends Component {
  constructor(props){
  super(props);


  }

  componentDidMount() {

  }

  render(){
    const allStories=this.props.stories
    const allUsers=this.props.users
    console.log('HERE STORIES', allStories)
    console.log('HERE USERS', allUsers)
    const listOfStories = allStories.map((story, index) => {
      console.log(index);
      let user = allUsers.find(user => user.id === story.user_id);;
      return <Story story={story} key={index} users={user} />
    });
  return (
    <div className='container my-container'>
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='row justify-content-around my-row'>
        {listOfStories}
        </div>
      </div>
    </div>
  )
}
}



export default Home;