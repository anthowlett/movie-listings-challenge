import React, { Component } from 'react';
import RatingFilter from './RatingFilter';
import { Wrapper } from './styles';

class Filters extends Component {
  render() {
    return (
      <Wrapper>
        Filters:
        <RatingFilter />
      </Wrapper>
    );
  }
}

export default Filters;