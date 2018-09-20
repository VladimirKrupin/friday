import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import { Link } from "react-router-dom";

class Header extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className="Header">
        <div className="Header-container wrapper">
          <div className="Header-logo">Friday</div>
          <div className="Header-link-container">
            {this.props.menu.map((item, index) =>
              <Link key={index} className="Header-link" to={item.link}>{item.lable}</Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
