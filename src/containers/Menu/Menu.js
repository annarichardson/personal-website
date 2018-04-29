/**
 * Menu.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { selected } = this.props;
    return (
      <MenuWrapper>
        <MenuItem selected={ selected === `profile` } href="#profile">
          Profile
        </MenuItem>
        <MenuItem selected={ selected === `experience` } href="#experience">
          Experience
        </MenuItem>
        <MenuItem selected={ selected === `skills` } href="#skills">
          Skills
        </MenuItem>
        <MenuItem selected={ selected === `contact` } href="#contact">
          Contact
        </MenuItem>
      </MenuWrapper>
    );
  }
}

Menu.propTypes = {
  selected: PropTypes.string,
};

export default connect((state) => ({
  selected: state.select.section,
}), {

})(Menu);
