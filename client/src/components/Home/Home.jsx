import React, { Component } from 'react';
import axios from 'axios';
import Story from './_StoryCard'
import PopularStoriesCarousel from '../Home/_PopularStoriesCarousel'
import NewestStoriesCarousel from '../Home/_NewestStoriesCarousel'
import { Redirect } from "react-router-dom";
import { 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
 } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,  Row, Col } from 'reactstrap';

import {Container} from 'reactstrap';

const items = [];
const newests = [];


class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = { 
      stories: {
        popular_stories: [],
        newest_stories: []
        
      }
      
    };    

    axios.get('http://localhost:3000/api/stories')
    .then(res => {
      console.log("STOOOOOOORIES",res)
      this.setState({stories: res.data})
    })

  }





 
  render() {
  
    const popularStories=this.state.stories.popular_stories
    const newestStories=this.state.stories.newest_stories
  
    return (
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <h4 className="titleHome">Popular Stories</h4>
        </Row>
        <Row>
          <h5 className="subtitleHome">The most popular stories from our collection</h5>
        </Row>
        <Row style={{marginTop:20}}>
          <PopularStoriesCarousel stories={popularStories}/>
        </Row>
        <br />
        <br />
        <br />
        <Row >
          <h4 className="titleHome">Newest Stories</h4>
        </Row>
        <Row>
          <h5 className="subtitleHome">The newest stories from our collection</h5>
        </Row>
        <Row style={{marginTop:20}}>
          <NewestStoriesCarousel stories={newestStories}/>
        </Row>
      </Container>
    );
  }

}



export default Home;