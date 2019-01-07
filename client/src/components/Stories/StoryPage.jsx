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
          user_liked_story: {},
        },
        text:"",
        comments: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.listOfGenres = this.listOfGenres.bind(this);
    this.setComments = this.setComments.bind(this);
    this.handleStoryLike = this.handleStoryLike.bind(this);
    this.handleStoryUnlike = this.handleStoryUnlike.bind(this);
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

navLinkToUser() {
  return `/users/${this.state.data.author.id}`
}

handleChange(event) {
  this.setState({ text: event.target.value });
};

handleSubmit(event){
  event.preventDefault();
  let story_id = this.state.data.story.id
  let text = this.state.text
  axios.put(`http://localhost:3000/api/comments`, { text, story_id })
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

handleStoryLike(event){
    event.preventDefault();
    console.log('handling story event', event.target);
    let storyLikes = this.state.data.number_of_likes;

    let storyId = this.state.data.story.id;
    console.log('dchecking', storyId)

    let story_id = this.state.data.story.id;


    axios.post('http://localhost:3000/api/stories_likes', { story_id })
      .then(res => {
        console.log('post to storyLikes', res);
        console.log('post to storyLikes 2', res.data);
        this.refreshStoryLikes(res.data)
      })


  }

  refreshStoryLikes(resData){
    console.log("WHAT IS THIS RESDATA?", resData)
    console.log('check state', this.state)
    this.state = {
          data: {
          ...this.state.data,
          number_of_likes: {
            number: resData,
          },
          user_liked_story: {
            boolean: true,
          }
          },
          selectedSegment: this.state.selectedSegment,
          feedback: this.state.feedback,
          text: this.state.text,

        }
        this.setState({
          data: {
            ...this.state.data
          },
          selectedSegment: this.state.selectedSegment,
          feedback: this.state.feedback,
          text: this.state.text,
        })
        console.log('RES STORY LIKES', this.state)
        console.log("FIND THE TOOOOOOOOOOOGLE", this.state.data.user_liked_story)
        console.log('FIND TOgGLE HERE', this.state.data.user_liked_story.boolean)
  }

handleStoryUnlike(event){
    event.preventDefault();
    console.log('handling story UNLIKE event', event.target);
    let storyLikes = this.state.data.number_of_likes;
    let story_id = this.state.data.story.id;
    console.log('checking state before handling story unlike', this.state)
    console.log('unlike, story_id', story_id);
    console.log('storyLikes', storyLikes);



    axios.delete(`http://localhost:3000/api/stories_likes/${story_id}`)
      .then(res => {
        console.log('post to storyLikes', res);
        console.log('post to storyLikes 2', res.data);
        console.log('NEW STATE after story UNLIKE', this.state)
        this.refreshStoryUnlike(res.data)
      })
  }

  refreshStoryUnlike(resData){
    console.log('check state', this.state)
    this.state = {
          data: {
          ...this.state.data,
          number_of_likes: {
            number: resData,
          },
          user_liked_story: {
            boolean: false,
          }
          },
          selectedSegment: this.state.selectedSegment,
          feedback: this.state.feedback,
          text: this.state.text,

        }
        this.setState({
          data: {
            ...this.state.data
          },
          selectedSegment: this.state.selectedSegment,
          feedback: this.state.feedback,
          text: this.state.text,
        })
        console.log('RES STORY LIKES', this.state)
  }


  render(){

    return (
      <div>
        <br />
        <br />
        <br />
        <div className='row'>
          <div className='col-12 my-col'>
            <div className='header row'>
              <div className='col-3 my-col-img'>
                <img className='img-cover' src={this.state.data.story.image} />
              </div>
              <div className='col-9 my-col-description'>
                <NavLink className='title' to={this.navLinkToRead()}>{this.state.data.story.title}</NavLink>
                <br />
                <NavLink className='author' to={this.navLinkToUser()}>by {this.state.data.author.first_name} {this.state.data.author.last_name}</NavLink>
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
                <br />
                <br />
                <span className='likes-readpage'>Likes: {this.state.data.number_of_likes.number} </span>
                {this.state.data.user_liked_story.boolean ? <i className="fas fa-heart unlike" onClick={this.handleStoryUnlike}></i>  : <i className="fas fa-heart like" onClick={this.handleStoryLike}></i>}

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