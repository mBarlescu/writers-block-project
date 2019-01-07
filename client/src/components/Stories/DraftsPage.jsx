import React, { Component } from 'react';
import axios from 'axios';
import EachDraft from './EachDraft'


class DraftsPage extends Component {
  constructor(props) {
    super (props)

    this.state = {
      id: 0,
      drafts:[],
    }
    this.deleteDraft2 = this.deleteDraft2.bind(this);


    let storyId = props.match.params.id
    const storyIdInt = Number.parseInt(storyId)
    this.state = {
      id: storyIdInt,
      drafts: this.state.drafts,
    }
    this.setState({
      id: this.state.id,
      drafts: this.state.drafts,
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
        }
        this.setState({
          id: this.state.id,
          drafts: this.state.drafts,
        });

        console.log("USERDRAFTS", userDrafts)
        console.log("USERDRAFT F STATE", this.state)
      })

    console.log('id', storyId)
    console.log('draft page state', this.state)
  }

  deleteDraft2(resData){
    console.log('IS DELETEDRAFT 2 BEING HIT?', resData)
    this.state = {
          id: this.state.id,
          drafts: resData,
        }
        this.setState({
          id: this.state.id,
          drafts: this.state.drafts,
        });
  //omg why
  }


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
      <br />
      <br />
      <br />
        {this.getDrafts()}
      </div>
    )
  }
}

export default DraftsPage;