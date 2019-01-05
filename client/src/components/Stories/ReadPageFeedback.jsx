import React, { Component } from 'react';

class ReadPageFeedback extends Component {
  constructor(props) {
    super (props);

    // this.state ={
    //   timeCreated: this.props.created,
    // }
    console.log('DATEEEE', typeof(this.props.created))

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




  render() {
    return(
      <div>
        {this.props.author.first_name} {this.props.author.last_name}: {this.props.text}
        <br />
        {this.timeSince(this.props.created)}
        <button>
        Like
        </button>
        <br />
      </div>
    )
  }
}


export default ReadPageFeedback;