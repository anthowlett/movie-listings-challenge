/**
 * Sort movies by popularity 
 * @param  {object} a
 * @param  {object} b
 * @return {array<object>}
 */
const sortByPopularity = (a, b) => 
  (a.popularity < b.popularity) ? 1 : -1;

/**
 * Sort movies by popularity
 * @param  {object} state
 * @return {array<object>}
 */
export const sortMoviesByPopularity = (movies) => 
  movies.concat().sort(sortByPopularity);

/**
 * Sort and filter movies
 * @param  {object} state
 * @return {array<object>}
 */
export const filterMovies = (state) => {
  let movies = state.movies.results;
  
  movies = sortMoviesByPopularity(movies);

  return movies;
}