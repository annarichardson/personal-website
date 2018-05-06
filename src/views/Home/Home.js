/**
 * Home.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import selectActions from 'store/select/actions';

import Profile from 'containers/Profile';
import Experience from 'containers/Experience';
import Skills from 'containers/Skills';
import Contact from 'containers/Contact';

import { scrollHeight } from 'utils';

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

  componentDidMount() {
    window.addEventListener(`scroll`, this.scrollSelectSection);
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.scrollSelectSection);
  }

  getRef = (ref, section) => {
    this.setState({ [`${section}Height`]: ref.clientHeight });
  }

  scrollSelectSection = () => {
    const { selectSection } = this.props;
    const {
      profileHeight,
      experienceHeight,
      skillsHeight,
      contactHeight,
    } = this.state;
    const distanceFromTop = scrollHeight();
    const titleHeight = this.title.clientHeight;
    const profileLocation = profileHeight + titleHeight;
    const experienceLocation = profileHeight + titleHeight + experienceHeight;
    const skillsLocation = profileHeight + titleHeight + experienceHeight + skillsHeight;
    const contactLocation = profileHeight + titleHeight + experienceHeight + skillsHeight + contactHeight;

    if (distanceFromTop > 0 && distanceFromTop < titleHeight) {
      selectSection(`title`);
    } else if (distanceFromTop > titleHeight && distanceFromTop < profileLocation) {
      selectSection(`profile`);
    } else if (distanceFromTop > profileLocation && distanceFromTop < experienceLocation) {
      selectSection(`experience`);
    } else if (distanceFromTop > experienceLocation && distanceFromTop < skillsLocation) {
      selectSection(`skills`);
    } else if (distanceFromTop > skillsLocation && distanceFromTop < contactLocation) {
      selectSection(`contact`);
    }
  }

  render() {
    return (
      <HomeContainer>
        <ImageSection innerRef={(node) => { this.title = node; }}>
          <Name>
            Anna
            <LastName>
              {' '}Richardson
            </LastName>
          </Name>
        </ImageSection>
        <Profile getRef={ this.getRef } />
        <Experience getRef={ this.getRef } />
        <Skills getRef={ this.getRef } />
        <Contact getRef={ this.getRef } />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  selectSection: PropTypes.func,
};

export default connect((state) => ({
  ...state,
}), {
  selectSection: selectActions.selectSection,
})(Home);
