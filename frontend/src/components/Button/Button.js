import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button className={this.props.btnClass}>Submit</button>
    );
  }
}

export default Button;
