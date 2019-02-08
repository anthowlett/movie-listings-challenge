import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Movie from '../components/NowPlayingMovies/Movie';
import '../setupTests';

const mockStore = configureMockStore();
const store = mockStore({});

describe('NowPlayingMovies', () => {
  
  describe('<Movie />', () => {
    const genres = [
      {id: 28, name: "Action"},
      {id: 12, name: "Adventure"},
      {id: 16, name: "Animation"}
    ]; 
    const item = {
      id: 450465,
      title: 'Aquaman',
      genre_ids: [28, 12, 16],
      popularity: 200
    };
    const component = shallow(
      <Movie store={store} key={item.id} data={item} genres={genres} />
    )

    it('should render', () => {
      expect(component.debug())
        .toMatchSnapshot();
    });
  });

});