import { combineReducers } from 'redux';
import config from './config';
import genres from './genres';
import movies from './movies';

export default combineReducers({
  config,
  genres,
  movies
});