import React from 'react';
import { connect } from 'react-redux';
import Header from "../Header/Header";

const Track = ({ track }) =>
  <div>
    <Header />
    <div className="wrapper wrapper-left wrapper-wrap">
      {track.name?track.name:'Not found tracks'}
    </div>
  </div>
;

const mapStateToProps = (state, ownProps) => {
  var track = {};
  var trackSearch = state.tracks.find(track => track.id === ownProps.params.id);
  return {
    track: (trackSearch === undefined)?track.name = 404:trackSearch
  };
};

export default connect(mapStateToProps)(Track);