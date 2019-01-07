import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, FieldGroup, Checkbox, Button, Form, Col, HelpBlock}  from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class NewStory extends Component {
  constructor(props){

    super(props);

    this.state={
      title:"",
      description:"",
      image:"",
      genres:[],
      listGenres: [],
      redirect: false
    }

    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleGenres = this.handleGenres.bind(this);
    this.getGenres = this.getGenres.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);


    axios.get(`http://localhost:3000/api/genres`)
    .then( (response) => {
      console.log("Response Genres ", response.data);
      this.getGenres(response.data)
    })
    .catch(function (error) {
      console.log("Error ", error);
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
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
    
    let genresTemp = this.state.genres
   // genresTemp.push(event.target.value)
    console.log("Kamylla: ", event.target.value)
    this.setState({genres: genresTemp});
  }

  getGenres(list) {
    this.setState({listGenres: list})
  }


  handleSubmit(event) {
    event.preventDefault();
    let title = event.target[0].value
    let description = event.target[1].value
    let genre= event.target[2].value
    let image= event.target[3].value


  
    axios.post(`http://localhost:3000/api/stories`, {title, description, genre, image })
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


    const genres = this.state.listGenres.map((item, index) => {
      console.log("ITEM", item);
      return (
        <option key={item.id} value={item.id}>{item.name}</option>
        //<Checkbox key={item.id} value={item.id}  onChange={this.handleGenres} inline >{item.name}     </Checkbox>
        
      );
    });


    return (
      <div>
        <div className="pb-2 mt-4 mb-2 border-bottom">
        <h5>New Story</h5>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Title</ControlLabel>
            <FormControl  type="text" id="kamylla" />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" className="test" />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Genres</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select" disabled selected>Select</option>
              {genres}
            </FormControl>
          </FormGroup>
          <FieldGroup
            id="formControlsText1"
            type="text"
            label="Image"
          />
          
            <div className="form-group">
              <label >Image</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>
          
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default NewStory;