import React, { Component } from 'react';
import './Home.css';
import Form from '../Form/Form';
import Header from "../Header/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Home;
