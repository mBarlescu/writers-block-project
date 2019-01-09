import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class User extends Component {
  constructor(props){
  super(props);

  console.log('PROPS FOR USER', this.props)
  }


  navLinkToUser() {
  return `/users/${this.props.user.id}`
}

  render(){


    return (
      <div className='col-5 eachStory'>
        <div className='header row'>
          <div className='col-5 eachStory-img'>
            <img className='img-cover' src={this.props.user.image} />
          </div>
          <div className='col-7 eachStory-description'>
            <NavLink className='authorForUsers' to={this.navLinkToUser()}>{this.props.user.first_name} {this.props.user.last_name}</NavLink>
            <br />
            <span className='description'>
              {this.props.user.description}
            </span>

          </div>
        </div>
      </div>
    );
  }
}


export default User;