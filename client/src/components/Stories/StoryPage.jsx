import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
          number_of_likes: {},
        },
        text:"",
        comments: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.listOfGenres = this.listOfGenres.bind(this);
    this.setComments = this.setComments.bind(this);
    //this.setRedirect = this.setRedirect.bind(this);
    //this.renderRedirect = this.renderRedirect.bind(this);



    let storyId = props.match.params.id
    const storyIdInt = Number.parseInt(storyId)
    console.log(props)
    this.setState({id: storyId})

    axios.get(`http://localhost:3000/api/stories/${storyId}`)
    .then(res => {
      console.log('working?', res)
      this.setState({data: res.data, comments: res.data.comments})
      console.log('STATEE', this.state)
    })
    .catch(err => {
      console.log('error', err)
    })



    this.setState({id: storyId})

    console.log('STATE HERE', this.state)

  }


/* setRedirect = () => {
  this.setState({
    redirect: true
  })
}


renderRedirect = () => {
  if (this.state.redirect) {
    let path = `/stories/${this.state.data.story.id}`
    console.log("Deveria redirecionar", path)
    return <Redirect to= {path} />
  }
} */


setComments = (data) => {
  this.setState({comments: data})
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

handleChange(event) {
  this.setState({ text: event.target.value });
};

handleSubmit(event){
  event.preventDefault();
  let story_id = this.state.data.story.id
  let text = this.state.text
  axios.post(`http://localhost:3000/api/comments`, { text, story_id })
  .then(res => {
    console.log('comment sent', res);
    console.log('comment sent 2', res.data);
    this.setComments(res.data.comments)
    this.setState({text:""})
     
  })

  
};

listOfComments(){
  const comments = this.state.comments;
  console.log("Comments", comments)
  return comments.map((comment, index) => {
    return <div>
              <span className='commentName-storypage'>{comment.first_name} {comment.last_name}: </span>
              <span>{comment.text}</span>
              <br />
              <br />
            </div>
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
                  <textarea className='comments-textarea-storypage' value={this.state.text} onChange={this.handleChange} type='comments' name='comments' />
                  <button type='submit' onClick={this.handleSubmit}> Comment </button>
                </form>

                  {this.listOfComments()}

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default StoryPage;