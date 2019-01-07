import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  Row, Col } from 'reactstrap';
import axios from 'axios';





class UserStories extends Component {
   constructor(props){

    super(props);

    console.log('UserStories', this.props)

}

navLinkToStory() {
  return `/stories/${this.props.author_stories.id}`
}
navLinkToUser() {
  return `/users/${this.props.author.id}`
}


  render(){
    return (
       <div className='col-5 my-col'>
        <div className='header row'>
          <div className='col-5 my-col-img'>
            <img className='img-cover' src={this.props.author_stories.image} />
          </div>
          <div className='col-7 my-col-description'>
            <NavLink className='title' to={this.navLinkToStory()}>{this.props.author_stories.title}</NavLink>
            <br />
            <NavLink className='author' to={this.navLinkToUser()}>by {this.props.author.first_name} {this.props.author.last_name}</NavLink>
            <br />
            <span className='description'>
              {this.props.author_stories.description}
            </span>

          </div>
        </div>
      </div>
  )}
}


export default UserStories