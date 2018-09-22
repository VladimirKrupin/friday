import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      showSearch: false
    };
  }
  handleSearch(event) {
    this.setState({query: event.target.value});
    this.props.onFind(event.target.value);
    if (this.props.tracks && event.target.value) {
      this.state.showSearch = true;
    }else {
      this.state.showSearch = false;
    }
  }
  render() {
    return (
      <div className="Header">
        <div className="Header-container wrapper">
          <a href="/" className="Header-logo">Friday</a>
          <div className="Header-search-container">
              <input
                className="Header-search"
                type="text"
                placeholder="Search..."
                value={this.state.query}
                onChange={this.handleSearch.bind(this)}
              />
            {this.state.showSearch ? (
              <div className="Header-search-box">
                <ul>
                  {this.props.tracks.map((track, index) =>
                    <p key={index}>- {track.name}</p>
                  )}
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="Header-link-container">
            {this.props.menu.map((item, index) =>
              <a key={index} className="Header-link" href={item.link}>{item.lable}</a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.searchFilter)),
    menu: state.menu,
  }),
  dispatch => ({
    onFind: (name) => {
      dispatch({type: 'FIND_TRACK', payload: name})
    }
  })
)(Header);
