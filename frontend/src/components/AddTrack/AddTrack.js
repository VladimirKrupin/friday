import React from 'react';
import './AddTrack.css';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { Link } from 'react-router';
import Header from "../Header/Header";

const AddTrack = ({ tracksNew, searchFilter, addTrack, trackName, addTrackName }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addTrack(trackName);
  };
  const handleEmailChange = (event) => {
    addTrackName(event.target.value);
  };
  return (
    <div>
      <Header />
      <div className="wrapper wrapper-left wrapper-wrap">
        <h1 className="text-header">Add track</h1>
        <form className="Add-Track-Form" onSubmit={handleSubmit}>
          <input
            className="Add-Track-Form-input"
            type="text"
            placeholder="E-mail"
            value={trackName}
            onChange={handleEmailChange}
          />
          <Button btnClass="Button" />
          <ul className="list">
            {tracksNew.map((track, index) =>
              <li key={index}><div>track <Link to={"tracks/"+track.id} >{track.name}</Link> was be added</div></li>
            )}
          </ul>
        </form>
      </div>
    </div>
  );
};


export default connect(
  (state) => ({
    tracksNew: state.newTracks,
    searchFilter: state.searchFilter,
    trackName: state.trackName
  }),
  dispatch => ({
    addTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload});
      dispatch({ type: 'ADD_NEW_TRACK', payload});
    },
    addTrackName: (name) => {
      dispatch({ type: 'ADD_NEW_TRACK_NAME', payload: name});
    }
  })
)(AddTrack);
