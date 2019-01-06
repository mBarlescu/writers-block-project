import React, { Component } from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: this.props.toggle
    };
    console.log('PROPS', this.props.toggle)
    console.log('PROPS 2', this.state)

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  //   console.log('SHIT PROPS', this.props.toggle)
  //   console.log('SHIT PROPS 2', this.state)

  // }

  render() {
    return (
      <button type='submit' >
        {this.state.isToggleOn ? <button>Unlike</button>  : <button onClick={this.props.handleStoryLike}>Like</button>}
      </button>
    );
  }
}

export default ToggleButton;
