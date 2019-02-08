import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { filters } from '../../utils';
import Movie from './Movie';
import { colors } from '../../utils';

// Styles
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Message = styled.p`
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  color: red;
  background-color: ${colors.black_5};
`;

class NowPlayingMovies extends Component {
  render() {
    const { movies, genres } = this.props;
    
    return (
      <Container>
        {
          !movies.length ?
            <Message>Sorry friend, we've got nothing :(</Message> : 
            movies.map((item) => (
              <Movie key={ item.id } data={ item } genres={ genres } />
            ))
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
	genres: state.genres.list,
	movies: filters.filterMovies(state)
});

NowPlayingMovies.propTypes = {
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(NowPlayingMovies);