import React, { Component } from 'react';
import axios from 'axios';

class CreateStory extends Component {

  constructor(props){

    super(props);

    this.state={
      story: {},
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublish = this.handlePublish.bind(this);




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

  };

  handleSubmit(event){
    event.preventDefault();

  console.log('Handling submit', event.target);
  let text = this.state.text


  let storyId = this.state.story.id;

  axios.put(`http://localhost:3000/api/stories/${storyId}`, { text })
    .then(res => {
      console.log('CONTENT2', res);
      console.log('CONTENT', res.data);
    })

  };

  handlePublish(event){
    event.preventDefault();

  console.log('handling publish', this);
  let text = this.state.text

  let storyId = this.state.story.id;

  axios.post(`http://localhost:3000/api/stories/${storyId}/publish`, { text })
  .then(res => {
    console.log('published content', res);
    console.log('published content 2', res.data);
  })
  };



  render(){

    return (
      <div>
        <br />
        <br />
        <h1 className='create-page-outer-container text-center'>{this.state.story.title}</h1>
          <br />
          <br />
        <form className='form-create-page' >
        <button type='submit' onClick={this.handleSubmit}>Save</button>
        <button type='submit' onClick={this.handlePublish}>Publish</button>
          <div className="form-group">

            <textarea onChange={this.handleChange} className="form-control my-create-textarea" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateStory;