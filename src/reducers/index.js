import { combineReducers } from 'redux';

import tracks from './tracks'
import playlists from './playlists'
import menu from './menu'
import searchFilter from './searchFilter'

export default combineReducers({
  tracks,
  playlists,
  menu,
  searchFilter
});