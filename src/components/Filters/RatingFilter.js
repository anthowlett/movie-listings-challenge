import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMinRating } from '../../actions';
import Range from './Range';
import styled from 'styled-components';
import { breakpoints } from '../../utils';

const RatingWrapper = styled.div`
	text-align: center;
	
  ${breakpoints.small(`
    padding-right: 20px;
  `)};
`;

class RatingFilter extends Component {
  render() {
		const { minRating, onSetMinRating } = this.props;
		
    return (
      <RatingWrapper>
				<p>Rated more than:</p> 
				<h2>{minRating}</h2>
				<Range value={minRating} onChange={onSetMinRating} />
			</RatingWrapper>
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