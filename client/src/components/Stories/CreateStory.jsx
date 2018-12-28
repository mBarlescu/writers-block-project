import React, { Component } from 'react';
import axios from 'axios';

class CreateStory extends Component {

  constructor(props){

    super(props);

    this.state={
      story: {},
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);




    let storyId = props.match.params.id;
    const storyIdInt = Number.parseInt(storyId);
    console.log(props);


    axios.get(`http://localhost:3000/api/stories/${storyId}/new`)
    .then(res => {
      console.log("NEW", res)
      this.setState({story: res.data})
      console.log('STATE', this.state)
    })
    .catch(err => {
      console.log('AAAAAAAA', err)
    })

    console.log('state', this.state)




  }

   handleChange(event) {
    this.setState({ text: event.target.value });
    console.log('EVENT', event)
  };

  handleSubmit(event){
    event.preventDefault();

  console.log('Handling submit', this);
  const text = this.state.text
  

  let storyId = this.state.story.id;

  axios.put(`http://localhost:3000/api/stories/${storyId}`, { text })
    .then(res => {
      console.log('CONTENT2', res);
      console.log('CONTENT', res.data);
    })

  }



  render(){

    return (
      <div>
        <br />
        <br />
        <div className='text-center'>{this.state.story.title} </div>
          <br />
          <br />
        <div className='createContainer'>
          <form onSubmit={this.handleSubmit}>

              <input type='text' name='text' onChange={this.handleChange} />

            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateStory;