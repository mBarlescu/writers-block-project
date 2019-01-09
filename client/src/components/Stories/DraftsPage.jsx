import React, { Component } from 'react';
import axios from 'axios';
import EachDraft from './EachDraft';
import UserStoriesDelete from './UserStoriesDelete';
import '../../styles/DraftPage.css';


class DraftsPage extends Component {
  constructor(props) {
    super (props)

    this.state = {
      id: 0,
      drafts:[],
      data:{
        story: {},
        author: {},
        genres: [],
        author_stories: [],
        number_of_likes: {},
        user_liked_story: {},
      },
    }
    this.deleteDraft2 = this.deleteDraft2.bind(this);
    this.deletePublished2 = this.deletePublished2.bind(this);

    let userId = props.match.params.id
    let storyId = props.match.params.id
    const storyIdInt = Number.parseInt(storyId)
    this.state = {
      id: storyIdInt,
      drafts: this.state.drafts,
      data:{
            ...this.state.data,
          },
    }
    this.setState({
      id: this.state.id,
      drafts: this.state.drafts,
      data:{
            ...this.state.data,
          },
    });




    axios.get(`http://localhost:3000/api/drafts`)
      .then(res => {
        console.log('axios get', res.data)
        console.log('STATE HERE B', this.state.id)

        const id = this.state.id;
        const allDrafts = res.data;
        const userDrafts = allDrafts.filter(function(drafts) {
        return drafts.user_id === id
        })
        this.state = {
          id: this.state.id,
          drafts: userDrafts,
          data:{
            ...this.state.data,
          },
        }
        this.setState({
          id: this.state.id,
          drafts: this.state.drafts,
          data:{
            ...this.state.data,
          },
        });

        console.log("USERDRAFTS", userDrafts)
        console.log("USERDRAFT F STATE", this.state)
      })

    axios.get(`http://localhost:3000/api/users/${userId}`)
    .then(res => {
      console.log('user page get request', res)
      this.state = {
          id: this.state.id,
          drafts: this.state.drafts,
          data: res.data,
        }
        this.setState({
          id: this.state.id,
          drafts: this.state.drafts,
          data:{
            ...this.state.data,
          },
        });
      // this.setState({
      //     id: this.state.id,
      //     drafts: this.state.drafts,
      //     data: res.data,
      //   });
      // this.setState({data: res.data})
      console.log('userpage state BIG', this.state)
    })


    console.log('id', storyId)
    console.log('draft page state', this.state)
  }

  listOfStories(){
    const authorStories = this.state.data.author_stories;
    return authorStories.map((story, index) => {
      return  <UserStoriesDelete deletePublished2={this.deletePublished2} key={this.state.data.author_stories.id} author={this.state.data.author} author_stories={story} />
    })
  }

  deleteDraft2(resData){
    console.log('IS DELETEDRAFT 2 BEING HIT?', resData)
    this.state = {
          id: this.state.id,
          drafts: resData,
          data:{
            ...this.state.data,
          },
        }
        this.setState({
          id: this.state.id,
          drafts: this.state.drafts,
          data:{
            ...this.state.data,
          },
        });
  //omg why
  }



  deletePublished2(){
    let userId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/users/${userId}`)
    .then(res => {
      console.log('user page get request', res)
      this.state = {
          id: this.state.id,
          drafts: this.state.drafts,
          data: res.data,
        }
        this.setState({
          id: this.state.id,
          drafts: this.state.drafts,
          data:{
            ...this.state.data,
          },
        });
      // this.setState({
      //     id: this.state.id,
      //     drafts: this.state.drafts,
      //     data: res.data,
      //   });
      // this.setState({data: res.data})
      console.log('userpage state BIG', this.state)
    })
  }
    // console.log('IS DELETEPUBLISHEDDDDDDDD BEING HIT?', resData)
    // console.log('IT IS SO WHAT IS STATE RIGHT HERE?!', this.state)
    // this.state = {
    //       id: this.state.id,
    //       drafts: this.state.drafts,
    //       data:{
    //         ...this.state.data,
    //         author_stories: resData,
    //       },
    //     }
    //     this.setState({
    //       id: this.state.id,
    //       drafts: this.state.drafts,
    //       data:{
    //         ...this.state.data,
    //       },
    //       });
  //omg why



  getDrafts(){
    console.log('state before get drafts', this.state);
    const drafts = this.state.drafts;
    return drafts.map((draft, index) => {
      return <EachDraft key={draft.id} deleteDraft2={this.deleteDraft2} id={draft.id} user_id={draft.user_id} title={draft.title} description={draft.description} text={draft.text} image={draft.image} published={draft.published} created_at={draft.created_at} updated_at={draft.updated_at} />
    })
  }






  render(){

    return(
      <div>
        <div className='row'>
        <div className='col-12'>
        <br />
        <br />
        <br />
          <h2> My Drafts </h2>
          <div className="row justify-content-around">

            {this.getDrafts()}
          </div>
          </div>
        </div>
        <div className='row'>
        <div className='col-12'>
        <hr />
          <h2> My Published </h2>
          <div className="row justify-content-around">

            {this.listOfStories()}
          </div>
          </div>
        </div>
      </div>

    )
  }
}

export default DraftsPage;