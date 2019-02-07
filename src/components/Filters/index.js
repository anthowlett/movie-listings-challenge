import React, { Component } from 'react';
import RatingFilter from './RatingFilter';
import GenresFilter from './GenresFilter';
import styled from 'styled-components';
import { colors, breakpoints } from '../../utils';

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${colors.black_5};

  ${breakpoints.small(`
    display: flex;
  `)};
`;

class Filters extends Component {
  render() {
    return (
      <Wrapper>
        <RatingFilter />
        <GenresFilter />
      </Wrapper>
    );
  }
}

export default Filters;