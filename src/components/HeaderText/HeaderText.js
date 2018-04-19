/**
 * HeaderText.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HorizontalLine from 'components/HorizontalLine';

import Header from './HeaderText.styles';

export default class HeaderText extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { children, className } = this.props;
    return (
      <div>
        <Header className={ className } >
          { children }
        </Header>
        <HorizontalLine />
      </div>
    );
  }
}

HeaderText.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

