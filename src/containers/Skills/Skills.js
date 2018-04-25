/**
 * Skills.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';

import HeaderText from 'components/HeaderText';
import Skill from 'components/Skill';

import {
  TextWrapper,
  SkillsWrapper,
  SectionWrapper,
  Wrapper,
} from './Skills.styles';

const SKILLS = [
  {
    title: "React",
    rating: 4,
  },
  {
    title: "Redux",
    rating: 4,
  },
  {
    title: "Django",
    rating: 4,
  },
  {
    title: "Javascript",
    rating: 4,
  },
  {
    title: "Python",
    rating: 4,
  },
  {
    title: "HTML",
    rating: 4,
  },
  {
    title: "CSS",
    rating: 4,
  },
  {
    title: "C++",
    rating: 3,
  },
  {
    title: "C",
    rating: 3,
  },
  {
    title: "Git",
    rating: 3,
  },
  {
    title: "PostgreSQL",
    rating: 3,
  },
  {
    title: "Express.js",
    rating: 3,
  },
];

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
      <SkillsWrapper id="skills">
        <TextWrapper>
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
        </TextWrapper>
      </SkillsWrapper>
    );
  }
}

Skills.propTypes = {};

