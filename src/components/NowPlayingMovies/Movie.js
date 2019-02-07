import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from '../../utils';
import Image from './Image';

// Styles
const Wrapper = styled.div`
  flex-basis: 100%;
  
  ${breakpoints.mini(`
      flex-basis: 50%;
  `)};
  ${breakpoints.small(`
      flex-basis: 33.333%;
  `)};
  ${breakpoints.medium(`
      flex-basis: 25%;
  `)};
`;

const Details = styled.div`
  padding: 5px 15px;
`;

const Movie = ({
  data,
  genres
}) => (
	<Wrapper>
		<Image name={data.poster_path} alt={data.title} />
		<Details>
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
		</Details>
	</Wrapper>
);

Movie.propTypes = {
  genres: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
};

export default Movie;