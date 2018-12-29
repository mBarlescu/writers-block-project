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


const items = [];

class PopularStoriesCarousel extends Component {
 
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
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    if(items.length === 0) {
      const popularStories=this.props.stories
      const listOfPopularStories = popularStories.map((story) => {
        let key = "popularStory_" + story.id;
        return <Story story={story} key={key} />
      });


      const size = 4;
      while (listOfPopularStories.length > 0) {
        let tempStories = listOfPopularStories.splice(0, size);
        items.push({key: "popularStories_" + Math.random(), stories: tempStories});
      }
    }

    const slidesPopularStories = items.map((item) => {
      return (
        <CarouselItem 
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}
        >
          <div>
            <Row >
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
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slidesPopularStories}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
         

    );
  }
}



export default PopularStoriesCarousel;