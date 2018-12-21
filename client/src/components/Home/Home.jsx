import React, { Component } from 'react';
import axios from 'axios';
import Story from '../Stories/Story'

class Home extends Component {
  constructor(){
  super();

    this.state = {
      stories: [],
      users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/users')
    .then(res => {
      this.setState({users: res.data})
    })
    .catch(err => {
      console.log('AAAAAAAA', err)
    })

    axios.get('http://localhost:3000/api/stories')
    .then(res => {
      this.setState({stories: res.data})
    })
  }

  render(){
    const allStories=this.state.stories
    const allUsers=this.state.users
    const listOfStories = allStories.map((story, index) => {
      return <Story story={story} key={index} users={allUsers[index]} />
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