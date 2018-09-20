import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    submit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['news','photos']),
    user: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    }),
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
      }),
    )
  };
  render() {
    return (
      <div className="Header">
        <div className="Header-container wrapper">
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
