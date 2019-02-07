import { combineReducers } from 'redux';
import config from './config';
import genres from './genres';
import movies from './movies';
import rating from './rating';

export default combineReducers({
  config,
  genres,
  movies,
  rating
});