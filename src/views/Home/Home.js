/**
 * Home.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './Home.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Home">
        Home
      </div>
    );
  }
}

Home.propTypes = {};

export default connect((state) => ({
  ...state,
}), {

})(Home);
