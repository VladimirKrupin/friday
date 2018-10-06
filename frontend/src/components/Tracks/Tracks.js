import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from "../Header/Header";

const Tracks = ({ tracks }) => {
  return (
    <div>
      <Header />
      <div className="wrapper wrapper-left wrapper-wrap">
        {tracks.length !== 0 ? (
          <ul className="list">
            {tracks.map((track, index) =>
              <li key={index}><Link to={"tracks/"+track.id} >{track.name}</Link></li>
            )}
          </ul>
        ) : (
          <div>Not found tracks, go to <Link to="/">Main page</Link> and add tracks</div>
        )}
      </div>
    </div>
  );
};

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
  })
)(Tracks);
