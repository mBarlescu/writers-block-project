import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class EachDraft extends Component {
  constructor(props) {
    super (props)

    this.state = {
      data: {
        id: this.props.id,
        user_id: this.props.user_id,
        title: this.props.title,
        description: this.props.description,
        text: this.props.text,
        image: this.props.image,
        published: this.props.published,
        created_at: this.props.created_at,
        updated_at: this.props.updated_at,
      }
    }

    this.deleteDraft = this.deleteDraft.bind(this);

    this.setState({
      data: {
        ...this.state.data
      }
    })

    // axios.get(`http://localhost:3000/api/drafts`)
    //   .then(res => {
    //     console.log('axios get', res.data)
    //     const allDrafts = res.data;
    //     const draftsForUser = allDrafts.find(function(drafts) {
    //       return drafts.user_id === this.state.id
    //     })
    //   })


    console.log('EACH DRAFT state', this.props)
    console.log('STATE FOR EACH', this.state)

  }

  getImage(){
  return this.state.data.image
  }

  timeSince(date) {
    let stringToDate = new Date(date);
    let seconds = Math.floor((new Date() - stringToDate) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

 navLinkToEdit() {
  return `/stories/${this.state.data.id}/create`
}

deleteDraft(event){
    event.preventDefault();
    console.log("DELETING DRAFT", this.event)

    axios.delete(`http://localhost:3000/api/stories/${this.state.data.id}`)
      .then(res => {
        console.log('deleting draft', res);
        console.log('deleting draft 2', res.data);
        this.props.deleteDraft2(res.data)
      })
      //omg why
  }




  render(){

    return(
      <div>
        <div className="row">
          <div className='col-3'>
            <img className='image' src={this.getImage()} />
          </div>
          <div className='col-6'>
            <span>{this.state.data.title}</span>
            <br />
            <span>Created: {this.timeSince(this.state.data.created_at)}</span>
            <br />
            <span>Updated: {this.timeSince(this.state.data.updated_at)}</span>
          </div>
          <div className='col-3'>
            <button>
              <NavLink to={this.navLinkToEdit()}>Edit</NavLink>
            </button>
            <br />
            <button onClick={this.deleteDraft}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EachDraft;