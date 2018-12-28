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
    console.log('PROPS', this.props.stories)




    const allUsers=this.props.users
    console.log('HERE STORIES', popularStories)

    console.log('COMPONENT DID MOUNT HOME')

    const popularStories=this.props.stories.popular_stories

    console.log('HERE PROPS', this.props)
    console.log('HERE STORIES', popularStories)

    console.log('HERE USERS', allUsers)
    const listOfPopularStories = popularStories.map((story, index) => {
      console.log(index);
      let user = allUsers.find(user => user.id === story.user_id);
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
        {listOfPopularStories}
        </div>
      </div>
    </div>
  )
}
}



export default Home;