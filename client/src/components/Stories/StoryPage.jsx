import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ReadPage from './ReadPage'
import { NavLink } from 'react-router-dom';

import '../../styles/StoryPage.css'



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
        comments: [],
        loggedIn: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.listOfGenres = this.listOfGenres.bind(this);
    this.setComments = this.setComments.bind(this);
    this.handleStoryLike = this.handleStoryLike.bind(this);
    this.handleStoryUnlike = this.handleStoryUnlike.bind(this);
    this.routeToRead = this.routeToRead.bind(this);
    this.renderComment = this.renderComment.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.renderCommentTitle = this.renderCommentTitle.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
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
      console.log('STATEE', this.state.comments)
    })
    .catch(err => {
      console.log('error', err)
    })



    this.setState({id: storyId})

    this.props.validateUserSession(()=> this.loggedIn());

  }

  loggedIn () {
    this.setState({loggedIn: true})
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

renderComment() {
  if (this.state.loggedIn) {
    return(
        <form>
          <textarea className='comments-textarea-storypage' value={this.state.text} onChange={this.handleChange} type='comments' name='comments' />
          <br />
          <button className='btn btn-secondary storypage-commentButton' type='submit' onClick={this.handleSubmit}> Comment </button>
        </form>
      );
  }
}

renderCommentTitle() {
  if(this.state.comments.length != 0 || this.state.loggedIn ) {
    return (
      <h2> Comments </h2>
    )
  }
}

renderHeart() {
  if (this.state.loggedIn) {
    if(this.state.data.user_liked_story.boolean) {
     return(
      <i className="fas fa-heart unlike uni-heart" onClick={this.handleStoryUnlike}></i>
     )
     } else {
    return(
      <i className="fas fa-heart like uni-heart" onClick={this.handleStoryLike}></i>
    )}
  }
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
    return <div className='comments-onStorypage'>
              <span className='commentName-storypage'>{comment.first_name} {comment.last_name}: </span>
              <span className='commentText-storypage'>{comment.text}</span>
              <div className='createdAt-storypage'>
                {this.timeSince(comment.created_at)}
              </div>
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

  timeSince(date) {
    let stringToDate = new Date(date);
    let seconds = Math.floor((new Date() - stringToDate) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  routeToRead(){
   this.props.history.push(this.navLinkToRead())
  }



  render(){

    return (
      <div>
        <br />
        <br />
        <br />

        <div className='col-12'>

            <div className='storypage-header row'>
              <div className='col-3 storyPage-img'>
                <img className='img-cover' src={this.state.data.story.image} />
              </div>
              <div className='col-9 storyPage-description'>
                <NavLink className='title' to={this.navLinkToRead()}>{this.state.data.story.title}</NavLink>
                <br />
                <NavLink className='storyPage-author' to={this.navLinkToUser()}>by {this.state.data.author.first_name} {this.state.data.author.last_name}</NavLink>
                <br />
                <span className='storyPage-inner-description'>
                  {this.state.data.story.description}
                </span>
                <br />
                <span className='storyPage-genre'>
                  Genre: {this.listOfGenres()}
                </span>
                <br />
                <br />

                <span className='likes-storypage'>Likes: {this.state.data.number_of_likes.number} </span>
                {this.renderHeart()}
                <br />
                <br />
                <button onclick={this.routeToRead} type='button' className='btn btn-secondary readMe'>
                 <NavLink className='navToRead' to={this.navLinkToRead()}>Read Me</NavLink>
                </button>


              </div>
            </div>

            <div className='row'>
              <div className='col-12 my-col comments-story-page'>
                <hr className="storyPage-hr" />
                  {this.renderCommentTitle()}
                  {this.renderComment()}
                  {this.listOfComments()}

              </div>
            </div>
          </div>
        </div>

    )
  }
}



export default StoryPage;