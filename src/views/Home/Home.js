/**
 * Home.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Profile from 'containers/Profile';
import Experience from 'containers/Experience';
import Skills from 'containers/Skills';
import Menu from 'containers/Menu';
import Contact from 'containers/Contact';

import {
  ImageSection,
  Name,
  HomeContainer,
  LastName,
} from './Home.styles';


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <HomeContainer>
        <Menu />
        <ImageSection>
          <Name>
            Anna
            <LastName>
              {' '}Richardson
            </LastName>
          </Name>
        </ImageSection>
        <Profile />
        <Experience />
        <Skills />
        <Contact />
      </HomeContainer>
    );
  }
}

Home.propTypes = {};

export default connect((state) => ({
  ...state,
}), {

})(Home);
