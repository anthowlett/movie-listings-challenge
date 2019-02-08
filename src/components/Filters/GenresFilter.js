import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterGenres } from '../../actions';
import { filters } from '../../utils';
import Checklist from './Checklist';

class GenresFilter extends Component {
	render() {
		const { genres, selected, onChange } = this.props;
		
    return (
      <div>
				<p>Select genres:</p>
				<Checklist list={genres} checked={selected} onChange={onChange} />
			</div>
    );
  }
}

const mapStateToProps = (state) => ({
	genres: filters.getAvailableGenres(state.genres.list, filters.filterMovies(state)),
	selected: state.genres.selected
});

const mapDispatchToProps = (dispatch) => ({
	onChange: (id, value) => dispatch(filterGenres(id, value))
});

GenresFilter.propTypes = {
	genres: PropTypes.array.isRequired,
	selected: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresFilter);