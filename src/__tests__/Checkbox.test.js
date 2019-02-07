import React from 'react';
import { shallow } from 'enzyme';
import { filterGenres } from '../actions';
import store from '../store';
import Checkbox from '../components/Filters/Checkbox';
import '../setupTests';

describe('<Checkbox />', () => {
  describe('onChange()', () => {

    test('Checkbox is checked after click', () => {
      const mockOnChange = jest.fn();
      const mockEvent = { 
        target: {
          value: 1, 
          checked: true
        } 
      };
      const checkbox = shallow(
        <Checkbox key={1} id={1} name='item' checked={false} onChange={mockOnChange} />
      );
      const input = checkbox.find('input');

      expect(input.prop('checked')).toBe(false);
      input.simulate('change', mockEvent);
      //expect(store.dispatch).toHaveBeenCalledWith(filterGenres());
    });

  });
});