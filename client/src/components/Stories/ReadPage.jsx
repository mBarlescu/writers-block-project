import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ReadPageText from './ReadPageText';
import ReadPageFeedback from './ReadPageFeedback';
import ToggleButton from './ToggleButton';
import '../../styles/ReadPage.css'

class ReadPage extends Component {
  constructor(props) {
    super (props);
    console.log('PROOOPS FOR READPAGE', this.props)
    this.state ={
      data: {
        story: {},
        segments: [],
        author: {},
        number_of_likes: {},
        segments_feedbacks: [],
        user_liked_story: {},
      },
      selectedSegment: 0,
      feedback: [],
      text: "",
      // userId: {
      //   id: this.props.currentUser.id,
      //   firstName: this.props.currentUser.firstName,
      //   lastName: this.props.currentUser.lastName,
      // }
    }

     this.selectSegment = this.selectSegment.bind(this);
     this.getFeedBack = this.getFeedBack.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleStoryLike = this.handleStoryLike.bind(this);
     this.handleStoryUnlike = this.handleStoryUnlike.bind(this);
     this.ifSegmentExistsShowFeedback = this.ifSegmentExistsShowFeedback.bind(this);
     this.changeColor = this.changeColor.bind(this);
     this.handleTextareaSubmit = this.handleTextareaSubmit.bind(this);


    let storyId = props.match.params.id
    const storyIdInt = Number.parseInt(storyId)
    console.log(props)
    console.log(storyId)
    console.log('STATE FOR READPAGE OMG', this.state)

    axios.get(`http://localhost:3000/api/stories/${storyId}/segments`)
    .then(res => {
      console.log('get request for readpage', res)
      this.setState({data:res.data})
      console.log('readPage state', this.state)
    })
    .catch(err => {
      console.log('error', err)
    })
  }



  listOfSegments(){
    const segments = this.state.data.segments;
    return segments.map((segment, index) => {
      return <ReadPageText changeColor={this.changeColor} onClick={this.selectSegment} text={segment.text} segmentId={segment.id} key={segment.id} />

    })
  }

  selectSegment(event){
    console.log('event here', event.props.segmentId)
    console.log('WHAT IS THE EVENT RIGHT FFFF HERE', event.target)
    // event.pstyle={color: "red"};
    this.state = {
          data: {
          ...this.state.data,
          },
          selectedSegment: event.props.segmentId,
          feedback: this.state.feedback,
          text: this.state.text,
          // userId: {...this.state.userId},

        }
        this.setState({
          data: {
            ...this.state.data
          },
          selectedSegment: this.state.selectedSegment,
          feedback: this.state.feedback,
          text: this.state.text,
          // userId: {...this.state.userId},
        })
    // this.setState({selectedSegment: event.props.segmentId}, function (){
    //     console.log('updated state', this.state);
        this.getFeedBack()
        // this.changeColor(event)
      // });
    console.log('event state', this.state)
  }

  changeColor(segment){
    const selectedSegmentState = this.state.selectedSegment;
    if (selectedSegmentState === segment) {
      return "steelblue";
    }
    return "";
  }

  getFeedBack(){
    const selectedSegmentState = this.state.selectedSegment
    const feedback = this.state.data.segments_feedbacks;
    const segmentFeedback = feedback.find(function(e) {
      return e.find(function(i) {
        return i.segment_id === selectedSegmentState;
      })
    });
    console.log('seg', segmentFeedback);
    this.setState({feedback: segmentFeedback}, function (){
        console.log('updated AGAIN state', this.state);
        this.showFeedBack();
  });
  }

  showFeedBack() {
    if(this.state.feedback){
      console.log('GIVE ME THE STATE', this.state)
    const feedback = this.state.feedback;
    return feedback.map((eachFeedBack, index) => {
      return <ReadPageFeedback currentUser={this.props.currentUser} key={eachFeedBack.id} id={eachFeedBack.id} likes={eachFeedBack.number_of_likes} text= {eachFeedBack.text} created={eachFeedBack.created_at} firstName={eachFeedBack.first_name} lastName={eachFeedBack.last_name} />
    })
  }
  }

  handleChange(event) {
    this.setState({text: event.target.value}, function () {
      console.log('textArea Value', this.state.text);
    });
  };

  handleTextareaSubmit(){

    document.getElementById("form_chooser").value = "";

  }

  handleSubmit(event){
    event.preventDefault();
  console.log('handling submit', event.target);
  let text = this.state.text;
  let segment_id = this.state.selectedSegment;

 /*  const params = {
    text: text,
    segment_id: segmentId,
  }; */
  console.log('STATE beofre submit', this.state);
  console.log('so', {text})

  axios.post('http://localhost:3000/api/feedbacks', {text, segment_id})
    .then(res => {
      console.log('post to feedbacks text', res);
      console.log('post to feedbacks 2 text', res.data);
      // this.refreshFeedback(res.data)

  //     this.state = {
  //       data: {
  //       ...this.state.data,
  //       segments_feedbacks: res.data,
  //   },
  // }
  this.refreshFeedback(res.data)
  this.handleTextareaSubmit();
  console.log('PLEASE', this.state)


    });

  }



  refreshFeedback(resData){

    const selectedSegmentState = this.state.selectedSegment
    const feedback = this.state.data.segments_feedbacks;
    const segmentFeedback = feedback.find(function(e) {
      return e.find(function(i) {
        return i.segment_id === selectedSegmentState;
      })
    });
    console.log('seg', segmentFeedback);

    console.log('FUCK', segmentFeedback);
    console.log('before', feedback)
    // feedback.splice(segmentFeedback)
    console.log('BULLSHIT', feedback.indexOf(segmentFeedback))
    const index = feedback.indexOf(segmentFeedback)
    feedback.splice(index, 1)

    console.log('lets see', feedback)
    feedback.push(resData);
    console.log('new data', feedback)
    console.log('WHAT IS RESDATA', resData)
        this.state = {
          data: {
          ...this.state.data,
          segments_feedbacks: feedback,
          },
          selectedSegment: this.state.selectedSegment,
          feedback: resData,
          text: this.state.text,
          // userId: {...this.state.userId},


        }
        this.setState({
          data: {
            ...this.state.data
          },
          selectedSegment: this.state.selectedSegment,
          feedback: this.state.feedback,
          text: this.state.text,
          // userId: {...this.state.userId},
        })
console.log('WHAT IS THE STATE OF READPAGE RIGHT HERE', this.state)
// this.showFeedBack()

  //   this.setState({feedback: segmentFeedback}, function (){
  //       console.log('updated AGAIN state', this.state);
  //       this.showFeedBack();
  // });
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
          // userId: {...this.state.userId},

        }
        this.setState({
          data: {
            ...this.state.data
          },
          selectedSegment: this.state.selectedSegment,
          feedback: this.state.feedback,
          text: this.state.text,
          // userId: {...this.state.userId},
        })
        console.log('RES STORY LIKES', this.state)
        console.log("FIND THE TOOOOOOOOOOOGLE", this.state.data.user_liked_story)
        console.log('FIND TOgGLE HERE', this.state.data.user_liked_story.boolean)
        this.showFeedBack()
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
          // userId: {...this.state.userId},

        }
        this.setState({
          data: {
            ...this.state.data
          },
          selectedSegment: this.state.selectedSegment,
          feedback: this.state.feedback,
          text: this.state.text,
          // userId: {...this.state.userId},
        })
        console.log('RES STORY LIKES', this.state)
  }

  ifSegmentExistsShowFeedback(){
    if (this.state.selectedSegment){
      return(
      <div className='col-4 feedback-area'>
          <form onSubmit={this.handleTextareaSubmit}>
            <textarea id="form_chooser" refs='notes' className='textarea-feedback' onChange={this.handleChange} onSubmit={this.handleTextareaSubmit}>
            </textarea>
            <br />
            <button className='btn btn-secondary commentButton-feedback' type='submit' onClick={this.handleSubmit}>
            Comment
            </button>
          </form>
          <br />
        {this.showFeedBack()}
      </div>
      )
    }
  }




  render(){

    return(
      <div>
      <br />
      <br />
      <br />
      {this.state.selectedSegment ? <div className='row'>
        <div className='col-8 readpage-header'>
          <h5> {this.state.data.author.first_name} {this.state.data.author.last_name} </h5>
            <span className='title-readpage'> {this.state.data.story.title} </span>
            <span className='likes-readpage'>Likes: {this.state.data.number_of_likes.number} </span>
            {this.state.data.user_liked_story.boolean ? <i className="fas fa-heart unlike uni-heart-read" onClick={this.handleStoryUnlike}></i>  : <i className="fas fa-heart like uni-heart-read" onClick={this.handleStoryLike}></i>}
            <br />
            <br />
            <br />
            {this.listOfSegments()}
        </div>
        {this.ifSegmentExistsShowFeedback()}
      </div>
      :
      <div className='row'>
        <div className='col-12 readpage-header'>
          <h5> {this.state.data.author.first_name} {this.state.data.author.last_name} </h5>
            <span className='title-readpage'> {this.state.data.story.title} </span>
            <span className='likes-readpage'>Likes: {this.state.data.number_of_likes.number} </span>
            {this.state.data.user_liked_story.boolean ? <i className="fas fa-heart unlike uni-heart-read" onClick={this.handleStoryUnlike}></i>  : <i className="fas fa-heart like uni-heart-read" onClick={this.handleStoryLike}></i>}
            <br />
            <br />
            <br />
            {this.listOfSegments()}
        </div>
        {this.ifSegmentExistsShowFeedback()}
      </div>
    }
    </div>
    )
  }
}

export default ReadPage;