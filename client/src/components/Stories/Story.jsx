import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  Row, Col } from 'reactstrap';
import axios from 'axios';





class Story extends Component {
   constructor(props){

    super(props);

    this.state = {
      //user: []
    }
}


  componentDidMount() {
    // axios.get(`http://localhost:3000/users/${this.props.story.user_id}`)
    // .then(res => {
    //   console.log('res', res)
    //   this.setState({user: res.data})
    // })

  }


  render(){
    return (
      /* <div className='col-5 my-col'>
        <div className='header row'>
          <div className='col-5 my-col-img'>
            <img className='img-cover' src={this.props.story.image} />
          </div>
          <div className='col-7 my-col-description'>
            <NavLink className='title' to="/">{this.props.story.title}</NavLink>
            <br />
            <NavLink className='author' to="/">by {this.props.story.first_name} {this.props.story.last_name}</NavLink>
            <br />
            <span className='description'>
              {this.props.story.description}
            </span>

          </div>
        </div>
      </div> */


      <Col sm="3">
      <Card body>
        <CardTitle>{this.props.story.title}</CardTitle>
        <CardText> {this.props.story.description}</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
    );

} 





}


export default Story;