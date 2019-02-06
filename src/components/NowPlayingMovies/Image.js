import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
const ImageHolder = styled.div`
  img {
    display: block;
    max-width: 100%;
  }
`;

class Image extends Component {
    getImageSrc(name, base, size) {
      return base + size + name;
    }

    render() {
      const { config } = this.props;
      const size = config.poster_sizes[4];
      const src = this.getImageSrc(this.props.name, config.secure_base_url, size);
      
      return (
        <ImageHolder>
          <img src={src} title={this.props.title} alt={this.props.alt} />
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