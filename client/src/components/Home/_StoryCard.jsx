import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  Row, Col } from 'reactstrap';
import axios from 'axios';

class StoryCard extends Component {
  
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    alert("OI!!");
  }

  render(){
    return (
      <Col sm="3" className=" d-flex align-items-stretc">
        <Card onClick={this.handleClick}>
          <CardImg top width="100%" height="180px" src={this.props.story.image} alt="Card image cap"/>
          <CardBody>
            <CardTitle style={{height: 70}}>{this.props.story.title}</CardTitle>
            <CardText> {this.props.story.first_name} {this.props.story.last_name}</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
  
    );
  } 

}
export default StoryCard;