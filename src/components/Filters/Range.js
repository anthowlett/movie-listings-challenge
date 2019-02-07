import React from 'react';
import PropTypes from 'prop-types';

const Range = ({
	value,
	min,
	max,
	step,
	onChange
}) => (
	<input type='range' min={min} max={max} step={step} value={value} onChange={(e) => {onChange(e.target.value)}} />
);

Range.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

Range.defaultProps = {
  min: 0,
  max: 10,
  step: 0.5
}

export default Range;