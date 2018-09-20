import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';

const menu = [
  {
    link: "/",
    lable: "home"
  },
  {
    link: "/app",
    lable: "App"
  },
  {
    link: "/dropdown",
    lable: "Dropdown"
  }
];

class Home extends Component {
  render() {
    return (
      <div>
        <Header menu={menu}/>
      </div>
    );
  }
}

export default Home;
