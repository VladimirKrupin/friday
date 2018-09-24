import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tracks'
import newTracks from './newTracks'
import menu from './menu'
import searchFilter from './searchFilter'
import trackName from './trackName'

export default combineReducers({
  routing: routerReducer,
  tracks,
  trackName,
  newTracks,
  menu,
  searchFilter
});