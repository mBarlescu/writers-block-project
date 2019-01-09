import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class UserStoriesDelete extends Component {
  constructor(props) {

    super(props);

    this.deletePublished = this.deletePublished.bind(this);

  }

  navLinkToStory() {
    return `/stories/${this.props.author_stories.id}`
  }

  navLinkToUser() {
    return `/users/${this.props.author.id}`
  }

  deletePublished(event){
    event.preventDefault();
    console.log("DELETING PUBLISH", this.event)

    axios.delete(`http://localhost:3000/api/stories/${this.props.author_stories.id}`)
      .then(res => {
        console.log('deleting draft', res);
        console.log('deleting draft 2', res.data);
        this.props.deletePublished2()
      })
      //omg why
  }
navLinkToStory() {
  return `/stories/${this.props.author_stories.id}`
}




  render(){

    return(
        <div className='col-5 eachStory'>
            <div className='header row'>
              <div className='col-5 eachStory-img'>
                <img className='img-cover' src={this.props.author_stories.image} />
              </div>
              <div className='col-7 eachStory-description'>
                <div className='eachStory-innerDescription'>
                   <NavLink className='title' to={this.navLinkToStory()}>{this.props.author_stories.title}</NavLink>
                  <br />
                  <span className='description'>
                    {this.props.author_stories.description}
                  </span>
                </div>
                <div className='eachStory-buttons'>
                  <button className='btn btn-secondary draftButtonDelete' onClick={this.deletePublished}>Delete</button>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default UserStoriesDelete;