/**
 * Image.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import ImageDiv from './Image.styles';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      src,
      height,
      width,
      className,
      onClick,
      alt,
    } = this.props;
    return (
      <ImageDiv
        className={ className }
        src={ src }
        height={ height }
        width={ width }
        alt={ alt }
        onClick={ onClick }
      />
    );
  }
}

if (process.env.NODE_ENV !== `production`) {
  const PropTypes = require(`prop-types`); // eslint-disable-line
  Image.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.any,
    width: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    alt: PropTypes.string.isRequired,
  };
}
