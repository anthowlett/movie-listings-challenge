import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import { MovieWrapper, MovieDetails } from './styles';

const Movie = ({
  data,
  genres
}) => (
	<MovieWrapper>
		<Image name={data.poster_path} alt={data.title} />
		<MovieDetails>
			<h2>{data.title}</h2>
			<div>
				<p>Rated <strong>{data.vote_average}</strong> / 10</p>
				<p>Popularity <strong>{Math.round(data.popularity)}</strong></p>
        <ul>
          {
            genres
              .filter(genre => data.genre_ids.includes(genre.id))
              .map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))
          }
        </ul>
			</div>
		</MovieDetails>
	</MovieWrapper>
);

Movie.propTypes = {
  genres: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
};

export default Movie;