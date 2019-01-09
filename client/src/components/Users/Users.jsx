import React, { Component } from 'react';
import User from './User';
import axios from 'axios';

class Users extends Component {
  constructor(props){
  super(props);

  this.state = {
    allUsers: this.props.users
  }
  this.setState({
    allUsers: this.state.allUsers
  })

  console.log('PROPS FOR USER', this.props)
  console.log('STATE FOR USERS', this.state)

  // console.log(props.stories)
  // if (!props.stories[0]) {
  //   return null;
  // }
    // const allStories=props.stories
  }

  componentDidMount(){
    console.log('MOUNTING HERE FROM USERS', this.state)

    axios.get('http://localhost:3000/api/users')
    .then(res => {
      console.log("STOOOOOOORIES",res)
      this.state = {
        allUsers: res.data
      }
      this.setState({
        allUsers: this.state.allUsers
      })
  this.getListOfUsers()
  })
  }

    getListOfUsers(){
      console.log('GET LIST OF USERS', this.state)
    const allUsers = this.state.allUsers;
    return allUsers.map((user, index) => {
      return <User /*story={allStories[index]}*/ key={index} user={user} />
    });
    }

    render(){
  return (
    <div className='row'>
      <div className='col-12'>
         <br/>
        <br/>
        <br/>
        <div className="pb-2 mt-4 mb-2 border-bottom">
        <h5>Authors</h5>
        </div>

        <div className='row justify-content-around'>
        {this.getListOfUsers()}
        </div>
      </div>
    </div>
  )
}
}


export default Users;