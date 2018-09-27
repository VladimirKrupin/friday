import React from 'react';
import './Home.css';
import Header from "../Header/Header";
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Button from "../Button/Button";

const Home = ({ handleSubmit, handleEmailChange }) => {
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
        <h1 className="text-header">Want to know Friday today or not?</h1>
        <form className="Add-Track-Form" onSubmit={handleSubmit}>
          <input
            className="Add-Track-Form-input"
            type="text"
            placeholder="Friday or not?"
            value={trackName}
            onChange={changeQuestion}
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
    question: state.trackName
  }),
  dispatch => ({
    addTrackName: (name) => {
      dispatch({ type: 'CHANGE_QUESTION', payload: name});
    }
  })
)(Home);
