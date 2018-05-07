/**
 * Experience.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderText from 'components/HeaderText';
import ExperienceItem from 'components/ExperienceItem';
import HorizontalLine from 'components/HorizontalLine';
import SectionWrap from 'components/SectionWrap';

import {
  ExperienceContainer,
  SubHeader,
} from './Experience.styles';

import EXPERIENCES from './data';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getRef(this.experience, `experience`);
  }

  render() {
    const experiences = (Object.keys(EXPERIENCES)).map((t) => {
      const items = EXPERIENCES[t].map((e) => {
        return <ExperienceItem data={ e } key={ e.title } />;
      });
      return (
        <div key={ t }>
          <SubHeader>
            { t.charAt(0).toUpperCase() + t.slice(1) }
          </SubHeader>
          { items }
          <HorizontalLine />
        </div>
      );
    });

    return (
      <ExperienceContainer
        id="experience"
        innerRef={(node) => { this.experience = node; }}
      >
        <SectionWrap>
          <HeaderText>
            Experience
          </HeaderText>
          { experiences }
        </SectionWrap>
      </ExperienceContainer>
    );
  }
}

Experience.propTypes = {
  getRef: PropTypes.func,
};

