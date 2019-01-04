import React, { Component } from 'react';

class ReadPageFeedback extends Component {
  constructor(props) {
    super (props);

    this.state = {
      segment: this.props.segmentId,
    }





  }




  render() {
    return(
      <div onClick={this.props.onClick.bind(null, this)}>
        {this.props.text}
      </div>
    )
  }
}


export default ReadPageFeedback;