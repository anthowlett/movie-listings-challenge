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
 * Filter movies by min rating
 * @param  {array<object>} movies
 * @param  {number}        ratingMin
 * @return {array<object>}
 */
const filterMoviesByMinRating = (movies, minRating) => 
	movies.filter((movie) => movie.vote_average >= minRating);

/**
 * Sort and filter movies
 * @param  {object} state
 * @return {array<object>}
 */
export const filterMovies = (state) => {
  let movies = state.movies.results;
  const min_rating = state.rating.min_rating;
  
  movies = sortMoviesByPopularity(movies);
  movies = filterMoviesByMinRating(movies, min_rating);

  return movies;
}