import React, { Component } from 'react';

class ReadPage extends Component {
  constructor(props) {
    super (props)

    console.log(props)
  }

  render(){

    return(
      <p> this is the read page </p>
    )
  }
}

export default ReadPage;