/**
 * Skills.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderText from 'components/HeaderText';
import SectionWrap from 'components/SectionWrap';
import Skill from 'components/Skill';

import {
  SkillsWrapper,
  SectionWrapper,
  Wrapper,
} from './Skills.styles';

import SKILLS from './data';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getRef(this.skills, `skills`);
  }

  render() {
    const halfWay = Math.ceil(SKILLS.length / 2);
    const skills1 = (SKILLS.slice(0, halfWay)).map((s) => {
      return <Skill data={ s } key={ s.title } />;
    });
    const skills2 = (SKILLS.slice(halfWay, SKILLS.length)).map((s) => {
      return <Skill data={ s } key={ s.title } />;
    });
    return (
      <SkillsWrapper
        id="skills"
        innerRef={(node) => { this.skills = node; }}
      >
        <SectionWrap>
          <HeaderText>
            Skills
          </HeaderText>
          <Wrapper>
            <SectionWrapper>
              { skills1 }
            </SectionWrapper>
            <SectionWrapper>
              { skills2 }
            </SectionWrapper>
          </Wrapper>
        </SectionWrap>
      </SkillsWrapper>
    );
  }
}

Skills.propTypes = {
  getRef: PropTypes.func,
};

