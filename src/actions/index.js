import * as types from './types';
import { getData } from '../api';

/**
 * Config action creators
 */
export const loadConfig = () => {
	return (dispatch) => {
    const promise = getData('configuration');

    return promise.then(response => {
      dispatch(configLoaded(response.data));
    });
	};
}

export const configLoaded = (config) => {
  return ({
    type: types.CONFIG_LOADED,
    config
  })
}

/**
 * Genre action creators
 */
export const loadGenres = () => {
	return (dispatch) => {
    const promise = getData('genres');

    return promise.then(response => {
      dispatch(genresLoaded(response.data.genres));
    });
	};
}

export const genresLoaded = (list) => {
  return ({
    type: types.GENRES_LOADED,
    list
  })
}

/**
 * Movie action creators
 */
export const loadMovies = () => {
	return (dispatch) => {
    const promise = getData('now_playing');

    return promise.then(response => {
      dispatch(moviesLoaded(response.data));
    });
	};
}

export const moviesLoaded = (movies) => {
  return ({
    type: types.MOVIES_LOADED,
    movies
  })
}

/**
 * Rating action creators
 */
export const setMinRating = (rating) => {
  return ({
    type: types.SET_MIN_RATING,
    rating
  })
}

/**
 * Wrapper action creator
 */
export const loadData = () => {
	return async (dispatch) => {
		dispatch(loadConfig());
		dispatch(loadGenres());
		dispatch(loadMovies());
	};
}