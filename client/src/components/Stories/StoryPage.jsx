import React, { Component } from 'react';

class StoryPage extends Component {
  constructor(props){

    super(props);

    let storyId = props.match.params.id
    const storyIdInt = Number.parseInt(storyId)
    console.log(props)

  }






  render(){

    return (
      <p> hello, this is the StoryPage page </p>
    )
  }
}

export default StoryPage;