/**
 * ContactForm.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './ContactForm.css';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="ContactForm">
        ContactForm
      </div>
    );
  }
}

ContactForm.propTypes = {};

export default connect((state) => {
  return {
    ...state,
  };
}, {

})(ContactForm);
