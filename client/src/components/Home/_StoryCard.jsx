import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  Row, Col, CardLink } from 'reactstrap';
import axios from 'axios';

class StoryCard extends Component {
  
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
    this.pathStoryPage = this.pathStoryPage.bind(this);
    

  }

  navLinkToUser() {
    return `/users/${this.props.story.user_id}`
  }

  navLinkToStory() {
    return `/stories/${this.props.story.id}`
  }

  timeSince(date) {
    let stringToDate = new Date(date);
    let seconds = Math.floor((new Date() - stringToDate) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  pathStoryPage(){
    let path = `/stories/${this.props.story.id}`
    console.log("PATH ", path)
    return `/stories/${this.props.story.id}`

  }


  handleClick() {
    alert("OI!!");
    
    //<Redirect to="/"/>
    //return <NavLink  to={this.pathStoryPage()}></NavLink>
   // /stories/:id/read
  }

  render(){
    return (
      <Col sm="3" className=" d-flex align-items-stretc">
        <Card>
        <CardBody>
        
        <CardTitle style={{height: 30}}><NavLink  className='title' to={this.navLinkToStory()}>{this.props.story.title}</NavLink></CardTitle>
        </CardBody>
          <CardImg top width="100%" height="180px" src={this.props.story.image} alt="Card image cap"/>
          <CardBody>
            <CardText><NavLink to={this.navLinkToUser()}>by {this.props.story.first_name}  {this.props.story.last_name}</NavLink></CardText>
            <CardText>
              <small className="text-muted">{this.timeSince(this.props.story.created_at)} </small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
  
    );
  } 

}
export default StoryCard;