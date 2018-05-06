/**
 * Bar.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BarContainer, BarValue } from './Bar.styles';

export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { value, className } = this.props;
    return (
      <BarContainer className={ className }>
        <BarValue value={ value } maxValue={ 5 } />
      </BarContainer>
    );
  }
}

Bar.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

