import React, { Component } from 'react';
import Axios from 'axios';

class NewStory extends Component {
  constructor(props){
    super(props);
  }

  

  render(){

    const body = {
      title: 'title',
      description: 'desc',
      image: 'http://www.starwars-universe.com/images/encyclopedie/personnages/images_v6/palpatine_imv6.jpg',
    }

    function newStoryPost(e){
      e.preventDefault();
      Axios({
        method: 'POST',
        url: '/api/stories',
        data: body
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log('Error ======> : ', err)
      })
    }


    return (
      <div className='form-container'>
        <header className='form-background'>
          <h2 className='form-title'>
            New Story
          </h2>
        </header>

        <form method='POST' action='/api/stories'>
          <div className='story-title'>
            <label for='story-title'>Enter Title:</label>
            <input className='story-form-text' name='story-title' id='enter_title' placeholder='...' type='text'></input>
          </div>
          <br/>
          <div className='story-description'>
            <label for='story-description'>Enter Description:</label>
            <textarea className='story-form-text' id='enter_description' name='story-description' placeholder='...' type='text'></textarea>
          </div>
          <br/>
          <div className='story-img'>
          <label for='story-img'>Insert Image URL:</label>
          <input className='story-form-text' id='insert_image' name='story-img' placeholder='...' type='url'></input>
          </div>
          <br/>
          <div className='check-genre'>
            <label for='genre1'>|Genre</label>
            <input className='story-form-checkbox' type='checkbox' name='genre1'></input>

            <label for='genre1'>|Genre</label>
            <input className='story-form-checkbox' type='checkbox' name='genre1'></input>

            <label for='genre1'>|Genre</label>
            <input className='story-form-checkbox' type='checkbox' name='genre1'></input>

            <label for='genre1'>|Genre</label>
            <input className='story-form-checkbox' type='checkbox' name='genre1'></input>
          </div>
    
          
          <div className='story-submit'>
            <button onClick={newStoryPost} type='submit' className='story-create-btn'>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewStory;