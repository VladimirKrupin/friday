import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    console.log('munu', this.props);
    return (
      <div className="Header">
        <div className="Header-container">
          <div className="Header-logo">Friday</div>
          <div className="Header-link-container">
            {this.props.menu.map((item, index) =>
              <a key={index} href="{item.link}" className="Header-link">{item.lable}</a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
