/**
 * MobileMenu.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  MenuWrapper,
  MenuItem,
  Header,
  MenuIcon,
} from './MobileMenu.styles';

export class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    const { selected } = this.props;
    return (
      <Header>
        <MenuIcon size={ 30 } onClick={ this.toggleMenu } />
        <MenuWrapper open={ open }>
          <MenuItem
            selected={ selected === `profile` }
            href="#profile"
            onClick={ this.toggleMenu }
          >
            Profile
          </MenuItem>
          <MenuItem
            selected={ selected === `experience` }
            href="#experience"
            onClick={ this.toggleMenu }
          >
            Experience
          </MenuItem>
          <MenuItem
            selected={ selected === `skills` }
            href="#skills"
            onClick={ this.toggleMenu }
          >
            Skills
          </MenuItem>
          <MenuItem
            selected={ selected === `contact` }
            href="#contact"
            onClick={ this.toggleMenu }
          >
            Contact
          </MenuItem>
        </MenuWrapper>
      </Header>
    );
  }
}

MobileMenu.propTypes = {
  selected: PropTypes.string,
};

export default connect((state) => ({
  selected: state.select.section,
}), {

})(MobileMenu);
