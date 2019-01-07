import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, FieldGroup, Checkbox, Button, Form, Col, HelpBlock}  from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import axios from 'axios';


class UpdateStory extends Component {
  constructor(props){

    super(props);

    this.state={
      title:"",
      description:"",
      image:"",
      genre_id:0,
      genres:[],
      listGenres: [],
      redirect: false,
      id:0
    }

    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleGenres = this.handleGenres.bind(this);
    this.getGenres = this.getGenres.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);

    let storyId = props.match.params.id

     axios.get(`http://localhost:3000/api/stories/${storyId}`)
    .then(res => {
      this.setState({title: res.data.story.title, 
                     description: res.data.story.description,
                     genre_id: res.data.genres[0].id})
      console.log('STATEE', res.data.genres)
    })
    .catch(err => {
      console.log('error', err)
    })
 


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
      let path = `/stories/${this.state.id}/create`
      console.log("Deveria redirecionar", path)
      return <Redirect to= {path} />
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
    this.setState({genre_id: event.target.value});
  }

  getGenres(list) {
    this.setState({listGenres: list})
  }


  handleSubmit(event) {
    event.preventDefault();
    let title = event.target[0].value
    let description = event.target[1].value
    let genre= event.target[2].value
    let image = ""
    if (this.pond.getFile(0)) {
      image = "http://localhost:3001" + this.pond.getFile(0).serverId
    }           
    
    let storyId = this.props.match.params.id
 
    axios.put(`http://localhost:3000/api/stories/${storyId}`, {title, description, genre, image })
    .then( (response) => {
      console.log("Response ", response);
      this.setState({id: response.data.id})
      this.setRedirect();
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
        {this.renderRedirect()}
        <div className="pb-2 mt-4 mb-2 border-bottom">
          <h5>Edit Story</h5>
        </div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Title</ControlLabel>
            <FormControl  type="text" value={this.state.title}  onChange={this.handleTitle} />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" className="test" value={this.state.description} onChange={this.handleDescription} />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Genres</ControlLabel>
            <FormControl componentClass="select" placeholder="select" value={this.state.genre_id} onChange={this.handleGenres}>
              <option value="select" disabled selected>Select</option>
              {genres}
            </FormControl>
          </FormGroup>
            <div className="form-group">
            <label >Image</label>
            </div>
            <FilePond
              ref={ref => this.pond = ref}
              allowMultiple={false}
              server="http://localhost:3000/api/upload"
              onupdatefiles={(fileItems) => {
                console.log(fileItems)
              // Set current file objects to this.state
              this.setState({
                files: fileItems.map(fileItem => fileItem.file)
              });
              }}>
            </FilePond>
          
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default UpdateStory;