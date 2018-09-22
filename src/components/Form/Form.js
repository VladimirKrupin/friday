import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import Button from '../Button/Button'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addTrack(this.state.email);
    this.setState({email: ''});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  render() {
    return (
      <div className="wrapper wrapper-left wrapper-wrap">
        <h1 className="text-header">Send form</h1>
        <form className="Form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="Form-input"
            type="text"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
          />
          <Button btnClass="Button" />
          <ul className="list">
            {this.props.tracks.map((track, index) =>
              <li key={index}>{track.name}</li>
            )}
          </ul>
        </form>
      </div>
    );
  }
}


export default connect(
  state => ({
    tracks: state.tracks,
    searchFilter: state.searchFilter
  }),
  dispatch => ({
    addTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload})
    }
  })
)(Form);
