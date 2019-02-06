import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filters } from '../../utils';
import Movie from './Movie';
import { Container, Message } from './styles';

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