import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Story extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='col-5 my-col'>
        <div className='header row'>
          <div className='col-5 my-col-img'>
            <img className='img-cover' src={this.props.story.image} />
          </div>
          <div className='col-7 my-col-description'>
            <NavLink className='title' to="/">{this.props.story.title}</NavLink>
            <br />
            <NavLink className='author' to="/">by {this.props.users.first_name} {this.props.users.last_name}</NavLink>
            <br />
            <span className='description'>
              {this.props.story.description}
            </span>

          </div>
        </div>
      </div>
    );
  }
}

export default Story;