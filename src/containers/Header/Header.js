/**
 * Header.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './Header.css';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Header">
        Header
      </div>
    );
  }
}

Header.propTypes = {};

export default connect(state => ({
  ...state,
}), {

})(Header);
