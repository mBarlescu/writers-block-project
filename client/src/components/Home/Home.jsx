import React, { Component } from 'react';
import axios from 'axios';
import Story from '../Stories/Story'
import Slider from "react-slick";


/* function figureOutUser(users, user_id) {
  users.find(user => user.id === user_id);
} */

class Home extends Component {
  constructor(props){
  super(props);

  }

  componentDidMount() {

  }

  /* render(){
    //const allUsers=this.props.users

    const popularStories=this.props.stories.popular_stories
    const listOfPopularStories = popularStories.map((story, index) => {
      //let user = allUsers.find(user => user.id === story.user_id);
      return <Story story={story} key={index} />
    });
  return (
    <div className='container my-container'>
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='row justify-content-around my-row'>
        {listOfPopularStories}
        </div>
      </div>
    </div>
  )
} */

render() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}











}



export default Home;