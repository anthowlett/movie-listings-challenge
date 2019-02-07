import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const Checklist = ({
	list,
	checked,
	onChange
}) => (
  <div>
    {
      list
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => {
          return (
            <Checkbox key={item.id} id={item.id} name={item.name} checked={checked.includes(item.id)} onChange={onChange} />
          );
        })
    }
  </div>
);

Checklist.propTypes = {
    list: PropTypes.array.isRequired,
    checked: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checklist;