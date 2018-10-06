import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Header = ({ onFind, tracks, menu, showSearch, searchFilter }) => {

  const handleSearch = (event) => {
    searchFilter = event.target.value.trim();
    onFind(searchFilter);
  };
  return (
    <div className="Header">
      <div className="Header-container wrapper">
        <Link to="/" className="Header-logo">Friday</Link>
        <div className="Header-search-container">
            <input
              className="Header-search"
              type="text"
              placeholder="Search..."
              value={searchFilter}
              onChange={handleSearch}
            />
          {(tracks && searchFilter) ? (
            <div className="Header-search-box">
              <ul>
                {tracks.map((track, index) =>
                  <li key={index}><Link className="Header-search-link" to={"tracks/"+track.id}>{track.name}</Link></li>
                )}
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="Header-link-container">
          {menu.map((item, index) =>
            <Link key={index} className="Header-link" to={item.link}>{item.lable}</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.searchFilter)),
    menu: state.menu,
    showSearch: false,
    searchFilter: state.searchFilter,
  }),
  dispatch => ({
    onFind: (name) => {
      dispatch({type: 'FIND_TRACK', payload: name})
    }
  })
)(Header);
