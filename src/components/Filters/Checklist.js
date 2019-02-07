import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import styled from 'styled-components';
import { colors } from '../../utils';

// Styles
const Message = styled.p`
  padding: 5px;
  color: red;
  background-color: ${colors.black_5};
`;

const Checklist = ({
	list,
	checked,
	onChange
}) => (
  <div>
    {
      !list.length ? 
        <Message>Opps! No movies means no filters :/</Message> : 
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