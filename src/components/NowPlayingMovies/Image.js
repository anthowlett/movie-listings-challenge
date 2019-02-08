import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Styles
const ImageHolder = styled.div`
  background: #000 none no-repeat top center;
  background-image: url('imgs/cover-placeholder.gif');
  background-size: cover;
  border: 1px solid #222;
`;

const Cover = styled.div`
  padding-bottom: 150%;
  ${props => props.bg && css`
    background: transparent none no-repeat top center;
    background-image: url(${props.bg});
  `};
  background-size: cover;
`;

export class Image extends Component {
    getImageSrc(name, base, size) {
      return base + size + name;
    }

    render() {
      const { config } = this.props;
      const size = config.poster_sizes[4];
      const src = this.getImageSrc(this.props.name, config.secure_base_url, size);
      
      return (
        <ImageHolder>
          <Cover bg={src} />
        </ImageHolder>
      );
    }
}

const mapStateToProps = (state) => ({
	config: state.config.images
});

Image.propTypes = {
  config: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default connect(mapStateToProps)(Image);