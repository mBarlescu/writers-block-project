import React, { Component } from 'react';

class NewStory extends Component {
  constructor(props){

    super(props);

    let userId = props.match.params.id
    const userIdInt = Number.parseInt(userId)
    console.log(props)

  }


  render(){

    return (
      <p> hello, this is the NewStory page </p>
    )
  }
}

export default NewStory;