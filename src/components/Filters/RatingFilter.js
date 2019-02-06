import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMinRating } from '../../actions';
import Range from './Range';

class RatingFilter extends Component {
  render() {
		const { minRating, onSetMinRating } = this.props;
		
    return (
      <div>
				<h3>Rating: {minRating}</h3>
				<Range value={minRating} onChange={onSetMinRating} />
			</div>
    );
  }
}

const mapStateToProps = (state) => ({
	minRating: state.rating.min_rating
});

const mapDispatchToProps = (dispatch) => ({
	onSetMinRating: (value) => dispatch(setMinRating(parseFloat(value)))
});

RatingFilter.propTypes = {
	minRating: PropTypes.number.isRequired,
	onSetMinRating: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingFilter);