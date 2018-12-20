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
    axios.get('http://localhost:3001/api/stories')
    .then(res => {
      console.log(res)
      this.setState({stories: res.data})
    })
    axios.get('http://localhost:3001/api/users')
    .then(res => {
      console.log(res)
      this.setState({users: res.data})
    })
  }

  render(){
    const allStories=this.state.stories
    const listOfStories = allStories.map((story, index) => {
      return <Story story={story} key={index} />
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