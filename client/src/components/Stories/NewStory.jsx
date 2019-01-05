import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, FieldGroup, Radio, Button, Form, Col, HelpBlock}  from 'react-bootstrap';
import axios from 'axios';


class NewStory extends Component {
  constructor(props){

    super(props);

    this.state={
      title:"",
      description:"",
      image:"",
      genres:[]
    }

    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleGenres = this.handleGenres.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleDescription(event) {
    this.setState({description: event.target.value});
  }

  handleImage(event) {
    this.setState({description: event.target.value});
  }

  handleGenres(event) {
    this.setState({genres: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    //let thisComponent = this;

    //let thisComponent = this;
    //let email = this.state.email;
    //let password = this.state.password;
    
  
    axios.post(`http://localhost:3000/api/stories/create`, { })
    .then(function (response) {
      console.log("Response ", response);
      //thisComponent.props.validateUserSession(()=> thisComponent.setRedirect());
    })
    .catch(function (error) {
      console.log("Error ", error);
      //thisComponent.setState({password: ''});
      //thisComponent.setState({visible: true});

    });
  }

  

  render(){

    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    return (
      <div>
        <div className="pb-2 mt-4 mb-2 border-bottom">
        <h5>New Story</h5>
        </div>
        <form  onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Title"
            onChange={this.handleTitle}
          />
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" onChange={this.handleDescription}/>
          </FormGroup>
          <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Genres</ControlLabel>
            <FormControl componentClass="select" multiple>
              <option value="select">select (multiple)</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <form>
            <div className="form-group">
              <label for="exampleFormControlFile1">Image</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.handleImage}/>
            </div>
          </form>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default NewStory;