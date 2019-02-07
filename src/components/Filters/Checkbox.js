import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils';

const Wrapper = styled.span`
  input {
    opacity: 0;
    position: absolute; 
  }

  label {
    display: inline-block;
    position: relative;
    margin: 0 5px 10px;
    padding: 7px;
    vertical-align: middle;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid black;
    transition: background-color 0.25s;
    border-radius: 5px;
  }

  input:checked + label {
    color: white;
    background-color: ${colors.green};
    border-color: green;
  }
`;

const Checkbox = ({
	id,
	name,
	checked,
	onChange
}) => (
  <Wrapper>
    <input
      id={id}
      type='checkbox'
      name='list'
      value={id}
      checked={checked}
      onChange={(e) => onChange(parseInt(e.target.value), e.target.checked)}
    />
    <label htmlFor={id}>{name}</label>
  </Wrapper>
);

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;