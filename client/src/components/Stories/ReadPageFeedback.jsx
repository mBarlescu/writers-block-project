import React, { Component } from 'react';
import axios from 'axios';

class ReadPageFeedback extends Component {
  constructor(props) {
    super (props);

    this.state ={
      number_of_likes: this.props.likes,
      feedback_id: this.props.id,
    }

    this.handleFeedbackLikes = this.handleFeedbackLikes.bind(this);

    console.log('STATE ON FEEDBACK PAGE', this.state)

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

  handleFeedbackLikes(event){
    event.preventDefault();
    console.log('handling feedback like event', event.target);
    console.log('is state even working here?', this.state)

    let feedback_id = this.state.feedback_id;
    axios.post('http://localhost:3000/api/feedback_likes', { feedback_id})
      .then(res => {
        console.log('feedlikes POSTS', res);
        console.log('feedbacklikes POSTS 2', res.data);
        this.refreshFeedbackLikes(res.data);
      })
  }

  refreshFeedbackLikes(resData){
    this.state = {
      number_of_likes: resData,
      feedback_id: this.state.feedback_id,
      }
    this.setState({
      number_of_likes: this.state.number_of_likes,
      feedback_id: this.state.feedback_id,
    })
  }




  render() {
    return(
      <div>
        {this.props.author.first_name} {this.props.author.last_name}: {this.props.text}
        <br />
        {this.timeSince(this.props.created)}
        <br />
        <br />
      </div>
    )
  }
}


export default ReadPageFeedback;