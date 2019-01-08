import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import UserStories from '../Stories/UserStories';

import {Container} from 'reactstrap';


class FindByGenre extends Component {
  
  constructor(props) {
    super(props);

    this.state = { 
      stories:[],
      genre:{},
      id:0
    }

    this.getStoriesByGenre = this.getStoriesByGenre.bind(this);

    this.getStoriesByGenre();

  }

  getStoriesByGenre() {
    axios.get(`http://localhost:3000/api/genres/${this.props.match.params.id}/stories`)
    .then(res => {
      console.log("Stories",res)
      this.setState({stories: res.data.stories, genre: res.data.genre})
    })

  }




  listOfStories(){
    const storiesByGenre = this.state.stories;
    return storiesByGenre.map((story, index) => {
      let author = {id: story.user_id,
              first_name: story.fisrtname,
              last_name: story.last_name}
      return  <UserStories key={index} author={author} author_stories={story} />
    })
  }

 
  render() {
    console.log("ID", this.props.match.params.id)

    if(this.state.id !==  this.props.match.params.id) {
      this.setState({id: this.props.match.params.id})
      this.getStoriesByGenre();
    }
  
    return (
      <div>
         <br />
      <br />
      <br />
        <div className="pb-2 mt-4 mb-2 border-bottom">
          <h5>{this.state.genre.name} Stories</h5>
        </div>
        <div className="row justify-content-around">

              {this.listOfStories()}
              </div>
              </div>
        
      
    );
  }

}



export default FindByGenre;