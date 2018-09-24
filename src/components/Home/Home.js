import React from 'react';
import './Home.css';
import Header from "../Header/Header";
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="wrapper wrapper-left wrapper-wrap">
        <h1 className="text-header">Friday main page</h1>
        <p>Go to <Link to="/addtracks">Add track</Link> page and add new track! Or look <Link to="/tracks">all tracks</Link> here.</p>
      </div>
    </div>
  );
};

export default Home;
