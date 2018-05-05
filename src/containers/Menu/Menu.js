/**
 * Menu.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './Menu.css';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Menu">
        Menu
      </div>
    );
  }
}

Menu.propTypes = {};

export default connect(state => ({
  ...state,
}), {

})(Menu);
