/**
 * SectionWrap.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './SectionWrap.styles';

export default class SectionWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { children, className } = this.props;
    return (
      <Wrapper className={ className }>
        { children }
      </Wrapper>
    );
  }
}

SectionWrap.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

