import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


class Story extends Component {
  constructor(props){

    super(props);

    this.state = {
      user: []
    }
}


  componentDidMount() {
    // axios.get(`http://localhost:3000/users/${this.props.story.user_id}`)
    // .then(res => {
    //   console.log('res', res)
    //   this.setState({user: res.data})
    // })

  }


  render(){
    console.log('HELLOHERE', this.state)
console.log('HELLO', this.props)
    return (
      <div className='col-5 my-col'>
        <div className='header row'>
          <div className='col-5 my-col-img'>
            <img className='img-cover' src={this.props.story.image} />
          </div>
          <div className='col-7 my-col-description'>
            <NavLink className='title' to="/">{this.props.story.title}</NavLink>
            <br />
            <NavLink className='author' to="/">by {this.props.users.first_name} {this.props.users.last_name}</NavLink>
            <br />
            <span className='description'>
              {this.props.story.description}
            </span>

          </div>
        </div>
      </div>
    );

}
}


export default Story;