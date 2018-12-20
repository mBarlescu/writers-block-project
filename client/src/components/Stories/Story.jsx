import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Story extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='col my-col'>


          {this.props.story.title}


      </div>
    );
  }
}

export default Story;