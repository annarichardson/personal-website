/**
 * Alert.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './Alert.css';

export class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Alert">
        Alert
      </div>
    );
  }
}

Alert.propTypes = {};

export default connect(state => ({
  ...state,
}), {

})(Alert);
