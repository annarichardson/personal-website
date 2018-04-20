/**
 * Skill.js
 * Written by: Anna Richardson
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bar from 'components/Bar';

import {
  Title,
  SkillWrapper,
  TitleWrapper,
  BarWrapper,
} from './Skill.styles';

export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { data, className } = this.props;
    return (
      <SkillWrapper className={ className }>
        <TitleWrapper>
          <Title>
            { data.title }
          </Title>
        </TitleWrapper>
        <BarWrapper>
          <Bar value={ data.rating } />
        </BarWrapper>
      </SkillWrapper>
    );
  }
}

Skill.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

