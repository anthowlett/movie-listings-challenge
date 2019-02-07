import React, { Component } from 'react';
import RatingFilter from './RatingFilter';
import GenresFilter from './GenresFilter';
import { Wrapper } from './styles';

class Filters extends Component {
  render() {
    return (
      <Wrapper>
        Filters:
        <RatingFilter />
        <GenresFilter />
      </Wrapper>
    );
  }
}

export default Filters;