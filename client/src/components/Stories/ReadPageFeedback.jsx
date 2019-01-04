import React, { Component } from 'react';

class ReadPageFeedback extends Component {
  constructor(props) {
    super (props);
  }







  render() {
    return(
      <div>
        {this.props.text}
        <br />
        <br />
      </div>
    )
  }
}


export default ReadPageFeedback;