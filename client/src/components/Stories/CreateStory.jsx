import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class CreateStory extends Component {

  constructor(props){

    super(props);

    this.state={
      story: {},
      redirect: false,
      text:""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.navLinkToStoryUpdate = this.navLinkToStoryUpdate.bind(this);

    this.props.validateUserSession(()=>{},()=> this.setRedirect());


    let storyId = props.match.params.id;
    const storyIdInt = Number.parseInt(storyId);
    console.log(props);


    axios.get(`http://localhost:3000/api/stories/${storyId}/new`)
    .then(res => {
      console.log("NEW", res)
      this.setState({story: res.data, text: res.data.text})
      console.log('STATE', this.state)
    })
    .catch(err => {
      console.log('AAAAAAAA', err)
    })

    console.log('state', this.state)




  }


  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }



  navLinkToStoryUpdate() {
    return `/stories/${this.state.story.id}/update`
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

  navLinkToStory() {
  return `/stories/${this.state.story.id}`
}



  render(){

    return (
      <div className='createPage'>
        {this.renderRedirect()}
        <br />
        <br />


          <br />
          <br />
        <form className='form-create-page' >
         <h1 className='create-page-outer-container text-center'>{this.state.story.title}</h1>
        <div className='createButtonsDiv'>
          <button className='btn btn-secondary createButton'  type='submit'>
            <NavLink className="buttonEditCreatePage createNav" to={this.navLinkToStoryUpdate()}>Edit Story</NavLink>
          </button>
          <button className='btn btn-secondary createButton' type='submit' onClick={this.handleSubmit}>Save</button>
          <button className='btn btn-secondary createButton' type='submit' onClick={this.handlePublish}>
            <NavLink className='buttonEditCreatePage createNav' to={this.navLinkToStory()}>Publish</NavLink>
          </button>
        </div>
          <div className="form-group">

            <textarea value={this.state.text} onChange={this.handleChange} className="form-control my-create-textarea" id="exampleFormControlTextarea1" rows="3" ></textarea>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateStory;