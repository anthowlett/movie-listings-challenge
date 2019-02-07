import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadData } from '../../actions';
import Filters from '../../components/Filters';
import NowPlayingMovies from '../../components/NowPlayingMovies';

const Loading = styled.p`
  padding: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
`;

class App extends Component {
  componentDidMount() {
    // Load data from TMDb API
    this.props.loadData();
  }

  render() {
    if (!this.props.loaded) {
      return <Loading>Just a little longer...</Loading>
    }

    return (
      <div className="App">
        <Filters />
        <NowPlayingMovies />
      </div>
    );
  }
}

// Get notified when async API calls are completed
const mapStateToProps = (state) => ({
  loaded: state.config.loaded && state.genres.loaded && state.movies.loaded
});

// Access data retrival method
const mapDispatchToProps = (dispatch) => ({
	loadData: () => dispatch(loadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);