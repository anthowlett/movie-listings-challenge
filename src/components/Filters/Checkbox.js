import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
	id,
	name,
	checked,
	onChange
}) => (
  <label>
    <input
      type='checkbox'
      name='list'
      value={id}
      checked={checked}
      onChange={(e) => onChange(parseInt(e.target.value), e.target.checked)}
    />
    {name}
  </label>
);

Checkbox.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;