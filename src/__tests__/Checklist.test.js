import React from 'react';
import renderer from 'react-test-renderer';
import Checklist from '../components/Filters/Checklist';
import '../setupTests';

describe('Filters', () => {
  
  describe('<Checklist />', () => {
    const genres = [
      {id: 28, name: "Action"},
      {id: 12, name: "Adventure"},
      {id: 16, name: "Animation"}
    ]; 
    const selected = [12, 16];
    const onChange = jest.fn();
    const component = <Checklist list={genres} checked={selected} onChange={onChange} />
    const tree = renderer.create(component).toJSON();

    it('should render', () => {
      expect(tree)
        .toMatchSnapshot();
    });

    it('should contain a list of items', () => {
      const numChildren = tree.children.length;
      expect(numChildren)
        .toBeTruthy();
      expect(numChildren)
        .toEqual(genres.length);
    });
  });

});