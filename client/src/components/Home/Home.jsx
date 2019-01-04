import React, { Component } from 'react';
import axios from 'axios';
import Story from './_StoryCard'
import PopularStoriesCarousel from '../Home/_PopularStoriesCarousel'
import NewestStoriesCarousel from '../Home/_NewestStoriesCarousel'
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
        <Row  style={{marginTop:60}}>
          <h4>Popular Stories</h4>
        </Row>
        <Row style={{marginTop:30}}>
          <PopularStoriesCarousel stories={popularStories}/>
        </Row>
        <Row style={{marginTop:60}}>
          <h4>Newest Stories</h4>
        </Row>
        <Row style={{marginTop:30}}>
          <NewestStoriesCarousel stories={newestStories}/>
        </Row>
      </Container>
    );
  }

}



export default Home;