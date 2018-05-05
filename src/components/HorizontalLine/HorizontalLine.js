/**
 * HorizontalLine.js
 * Written by: Anna Richardson
 */

import React, { PureComponent } from 'react';
import Line from './HorizontalLine.styles';

export default class HorizontalLine extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { className } = this.props;
    return (
      <Line className={ className } />
    );
  }
}

if (process.env.NODE_ENV !== `production`) {
  const PropTypes = require(`prop-types`); // eslint-disable-line
  HorizontalLine.propTypes = {
    className: PropTypes.string,
  };
}
