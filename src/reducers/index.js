import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tracks'
import newTracks from './newTracks'
import menu from './menu'
import searchFilter from './searchFilter'
import trackName from './trackName'
import question from './question'
import answer from './answer'

export default combineReducers({
  routing: routerReducer,
  tracks,
  trackName,
  newTracks,
  menu,
  searchFilter,
  question,
  answer
});