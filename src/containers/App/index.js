import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions';

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
        <p>Loaded.</p>
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