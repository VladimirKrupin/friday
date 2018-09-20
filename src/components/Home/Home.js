import React, { Component } from 'react';
import './Home.css';
import Dropdown from "../Dropdown/Dropdown";
import App from '../App/App';

class Home extends Component {
  render() {
    return (
      <div>
        <Dropdown />
        <App />
      </div>
    );
  }
}

export default Home;
