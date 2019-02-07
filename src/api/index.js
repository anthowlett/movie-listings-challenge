import axios from 'axios';

/**
 * API Constants
 */
const API_HOST = 'https://api.themoviedb.org/3/';
const API_KEY = '6e43406aead285fea420f24a8570c193';
const API_PATHS = {
  configuration: 'configuration',
	now_playing: 'movie/now_playing',
	genres: 'genre/movie/list'
};

/**
 * Access the API
 * @param  {string} path
 * @return {object}
 */
export const getData = async (path) => {
  const url = `${ API_HOST + API_PATHS[path] }?api_key=${ API_KEY }`;
  return axios.request(url);
}