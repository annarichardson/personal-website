/**
 * Map.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './Map.css';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Map">
        Map
      </div>
    );
  }
}

Map.propTypes = {};

export default connect((state) => {
  return {
    ...state,
  };
}, {

})(Map);
