import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '../components/Filters/Checkbox';
import '../setupTests';

describe('Filters', () => {

  describe('<Checkbox />', () => {
    const id = 1;
    const name = 'Genre name';
    const onChange = jest.fn();
    const checked = false;
    const component = <Checkbox key={id} id={id} name={name} checked={checked} onChange={onChange} />
    const tree = renderer.create(component).toJSON();

    it('should render', () => {
      expect(tree)
        .toMatchSnapshot();
    });

    it('should contain an input', () => {
      expect(tree.children.map(child => child.type))
        .toContain('input');
    });

    it('should contain a label', () => {
      expect(tree.children.map(child => child.type))
        .toContain('label');
    });

    it('label should contain text', () => {
      const label = tree.children.filter(child => child.type === 'label')[0];
      expect(label.children[0]).toEqual(
        expect.stringMatching(name)
      );
    });
  });

});