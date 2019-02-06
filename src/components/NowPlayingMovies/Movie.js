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
				<h3>Rated <span>{data.vote_average}</span> / 10</h3>
				<h3>Popularity <span>{Math.round(data.popularity)}</span></h3>
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