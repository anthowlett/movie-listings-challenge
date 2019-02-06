import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';
import Filters from '../../components/Filters';
import NowPlayingMovies from '../../components/NowPlayingMovies';

class App extends Component {
  componentDidMount() {
    // Load data from TMDb API
    this.props.loadData();
  }

  render() {
    if (!this.props.loaded) {
      return <p>Just a little longer...</p>
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