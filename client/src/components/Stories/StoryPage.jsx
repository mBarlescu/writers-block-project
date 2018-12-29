import React, { Component } from 'react';
import axios from 'axios';
import ReadPage from './ReadPage'
import { NavLink } from 'react-router-dom';


class StoryPage extends Component {
  constructor(props){

    super(props);

    this.state={
        data: {
          story: {},
          author: {},
          genres: [],
          author_stories: [],
          comments: [],
          number_of_likes: {},
          id: '',
        },
      }

      this.listOfGenres = this.listOfGenres.bind(this);


    let storyId = props.match.params.id
    const storyIdInt = Number.parseInt(storyId)
    console.log(props)
    this.setState({id: storyId})

  axios.get(`http://localhost:3000/api/stories/${storyId}`)
  .then(res => {
    console.log('working?', res)
    this.setState({data: res.data})
    console.log('STATEE', this.state)
  })
  .catch(err => {
    console.log('error', err)
  })



  this.setState({id: storyId})

  console.log('STATE HERE', this.state)
  // const genres=this.state.data.genres
  // console.log('genres', genres)

  // const listOfGenres = genres.map((genre, index) => {
  //   return {genre.name};
  // })
  // console.log('GENREEEEES', listOfGenres)
}

listOfGenres() {
  const genres=this.state.data.genres;
  console.log('this is genres', genres)
 return genres.map((genre, index) => {
    console.log('this is genres names', genre.name)
    return genre.name;
  })
}

navLinkToRead() {
  return `/stories/${this.state.id}/read`
}



  render(){

    return (
      <div>
        <div className='col-5 my-col'>
          <div className='header row'>
            <div className='col-5 my-col-img'>
              <img className='img-cover' src={this.state.data.story.image} />
            </div>
            <div className='col-7 my-col-description'>
              <NavLink className='title' to="/">{this.state.data.story.title}</NavLink>
              <br />
              <NavLink className='author' to="/">by {this.state.data.author.first_name} {this.state.data.author.last_name}</NavLink>
              <br />
              <span className='description'>
                {this.state.data.story.description}
              </span>
              <br />
              <span className='genre'>
                Genre: {this.listOfGenres()}
              </span>
              <button>
               <NavLink to={this.navLinkToRead()}>Read</NavLink>
              </button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default StoryPage;