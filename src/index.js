import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import Home from './components/Home/Home';
import App from './components/App/App';
import Dropdown from './components/Dropdown/Dropdown';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header/Header";
import Menu from "./resourses/menu";

const menu = Menu();

ReactDOM.render(
  <Router>
    <div>
      <Header menu={menu} />
      <Route exact path="/" component={Home} />
      <Route path="/app" component={App} />
      <Route path="/dropdown" component={Dropdown} />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
