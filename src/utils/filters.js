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
 * Get available genres
 * @param  {array<object>} movies
 * @return {array<object>}
 */
export const getAvailableGenres = (genres, movies) => {
  const genre_ids = movies.map((item) => item.genre_ids);

  if (!genre_ids.length) return [];

  const unique = genre_ids.reduce((a, b) => [...a, ...b]).sort();
  const deduped = [...new Set(unique)];

  return deduped.map((id) => genres.find((genre) => genre.id === id));
}

/**
 * Filter movies by min rating
 * @param  {array<object>} movies
 * @param  {number}        minRating
 * @return {array<object>}
 */
const filterMoviesByMinRating = (movies, minRating) => 
  movies.filter((movie) => movie.vote_average >= minRating);
  
/**
 * Filter movies by genre 
 *
 * @param  {array<object>} movies
 * @param  {array<number>} selected
 * @return {array<object>}
 */
const filterMoviesByGenre = (movies, selected) => {
  return selected.length ? 
    movies.filter(movie => selected.every(genre => movie.genre_ids.includes(genre))) : movies;
}

/**
 * Sort and filter movies
 * @param  {object} state
 * @return {array<object>}
 */
export const filterMovies = (state) => {
  let movies = state.movies.results;
  const min_rating = state.rating.min_rating;
  const selected = state.genres.selected;
  
  movies = sortMoviesByPopularity(movies);
  movies = filterMoviesByMinRating(movies, min_rating);
  movies = filterMoviesByGenre(movies, selected);

  return movies;
}