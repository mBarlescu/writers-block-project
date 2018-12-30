import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class ReadPage extends Component {
  constructor(props) {
    super (props);

    this.state ={
      data: {
        story: {},
        segments: [],
        author: {},
        number_of_likes: {},
        segments_feedbacks: [],
      },
    }

    let storyId = props.match.params.id
    const storyIdInt = Number.parseInt(storyId)
    console.log(props)
    console.log(storyId)

    axios.get(`http://localhost:3000/api/stories/${storyId}/segments`)
    .then(res => {
      console.log('get request for readpage', res)
      this.setState({data:res.data})
      console.log('readPage state', this.state)
    })
    .catch(err => {
      console.log('error', err)
    })
  }

  listOfSegments(){
    const segments = this.state.data.segments;
    return segments.map((segment, index) => {
      return <div>
              {segment.text}
            </div>
    })
  }

  render(){

    return(
      <div className='row'>
        <div className='col-8 test-col'>
          <h5> {this.state.data.author.first_name} {this.state.data.author.last_name} </h5>
            <span className='title-readpage'> {this.state.data.story.title} </span>
            <span className='likes-readpage'>Likes: {this.state.data.story.number_of_likes} </span>
            <br />
            <br />
            {this.listOfSegments()}
        </div>
        <div className='col-4 test-col'>
        </div>
      </div>
    )
  }
}

export default ReadPage;