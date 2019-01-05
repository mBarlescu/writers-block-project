import React, { Component } from 'react';

class ReadPageFeedback extends Component {
  constructor(props) {
    super (props);
  }







  render() {
    return(
      <div>
        {this.props.author.first_name} {this.props.author.last_name}: {this.props.text}
        <br />
        {this.props.created}
        <br />
        <br />
      </div>
    )
  }
}


export default ReadPageFeedback;