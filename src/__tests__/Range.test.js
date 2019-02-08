import React from 'react';
import renderer from 'react-test-renderer';
import Range from '../components/Filters/Range';
import '../setupTests';

describe('Filters', () => {

  describe('<Range />', () => {
    const minRating = 3;
    const onSetMinRating = jest.fn();
    const component = <Range value={minRating} onChange={onSetMinRating} />
    const tree = renderer.create(component).toJSON();

    it('should render', () => {
      expect(tree)
        .toMatchSnapshot();
    });

    it('should not have child nodes', () => {
      expect(tree.children)
        .toBeFalsy();
    });
  });

});