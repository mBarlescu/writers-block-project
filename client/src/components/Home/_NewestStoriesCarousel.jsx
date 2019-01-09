import React, { Component } from 'react';
import axios from 'axios';
import Story from './_StoryCard'
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

const newests = [];

class NewestStoriesCarousel extends Component {
 

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === newests.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? newests.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    if(newests.length === 0) {
      const newestStories=this.props.stories
      const listOfNewestStories = newestStories.map((story) => {
        let key = "newestStory_" + story.id;
        return <Story story={story} key={key} />
      });

      const size = 4;
      while (listOfNewestStories.length > 0) {
        let tempStories = listOfNewestStories.splice(0, size);
        newests.push({key: "newestStories_" + Math.random(), stories: tempStories});
      }
    }

    const slidesNewestStories = newests.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          <div>
            <Row>
              {item.stories}
            </Row>
          </div>
        </CarouselItem>
      );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={newests} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slidesNewestStories}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
    
    );
  }

}



export default NewestStoriesCarousel;