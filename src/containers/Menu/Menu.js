/**
 * Menu.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  MenuWrapper,
  MenuItem,
} from './Menu.styles';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <MenuWrapper>
        <MenuItem href="#profile">
          Profile
        </MenuItem>
        <MenuItem href="#experience">
          Experience
        </MenuItem>
        <MenuItem href="#skills">
          Skills
        </MenuItem>
      </MenuWrapper>
    );
  }
}

Menu.propTypes = {};

export default connect((state) => ({
  ...state,
}), {

})(Menu);
