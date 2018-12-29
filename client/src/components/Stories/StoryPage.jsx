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
        },
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
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
  return `/stories/${this.state.data.story.id}/read`
}

handleChange(event){
  this.setState({ text: {
    text: event.target.value,
    }
  });
    console.log('handle submit here', this.state)
  };

handleSubmit(event){
  event.preventDefault();
  let text = this.state.text
  console.log('being fired?', this.state)
  const comments = this.state.data.comments
  console.log('comments are lame', comments)
  let newComments = comments.slice();
  newComments.push(text);
  console.log('this is what i want to see', newComments)

  this.state = {
    data: {
      ...this.state.data,
      comments: newComments,
    },
  };
  this.setState({
     data: {
      ...this.state.data
    }
  })
  // this.setState({
  //   data: Object.assign({}, this.state.data, {
  //     comments: newComments,
  //   }),
  // });

  console.log('is state being changed here?', this.state)
  let storyId = this.state.data.story.id;

  axios.put(`http://localhost:3000/api/stories/${storyId}`, { newComments })
  .then(res => {
    console.log('comment sent', res);
    console.log('comment sent 2', res.data);
  })

  console.log('this comment', this.state)
};

listOfComments(){
  const comments = this.state.data.comments;
  return comments.map((comment, index) => {
    return <li>{comment.text}</li>
  })
}


  render(){

    return (
      <div>
        <div className='row'>
          <div className='col-12 my-col'>
            <div className='header row'>
              <div className='col-3 my-col-img'>
                <img className='img-cover' src={this.state.data.story.image} />
              </div>
              <div className='col-9 my-col-description'>
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
            <div className='row'>
              <div className='col-12 my-col comments-story-page'>
                <h2> Comments </h2>
                <form>
                  <label>
                    Comment
                    <textarea className='comments-textarea-storypage' onChange={this.handleChange} type='comments' name='comments' />
                  </label>
                  <button type='submit' onClick={this.handleSubmit}> Comment </button>
                </form>
                <ul>
                  {this.listOfComments()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default StoryPage;