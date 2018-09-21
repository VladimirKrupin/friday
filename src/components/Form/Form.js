import React, { Component } from 'react';
import './Form.css';

import Button from '../Button/Button'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      messages: [{
        name: '',
        date: '',
        message: ''
      }]
    };
  }
  handleSubmit(event) {
    event.preventDefault();
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
          <div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
