import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Image } from '../components/NowPlayingMovies/Image';
import '../setupTests';

describe('NowPlayingMovies', () => {
  
  describe('<Image />', () => {
    const data = {
      poster_path: '/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg',
      title: 'Aquaman'
    };
    const config = {
      poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
      secure_base_url: 'https://image.tmdb.org/t/p/'
    }
    const tree = renderer.create(
      <Image name={data.poster_path} alt={data.title} config={config} />
    );

    it('should render', () => {
      expect(tree.toJSON())
        .toMatchSnapshot();
    });

    it('should contain a placeholder image', () => {
      expect(tree.toJSON())
        .toHaveStyleRule('background-image', 'url(\'imgs/cover-placeholder.gif\')');
    });

    it('should contain a cover image', () => {
      expect(tree.toJSON().children[0])
        .toHaveStyleRule('background-image', 'url(https://image.tmdb.org/t/p/w500/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg)');
    });

    it('should only have one child', () => {
      expect(tree.toJSON().children.length)
        .toEqual(1);
    });
  });

});