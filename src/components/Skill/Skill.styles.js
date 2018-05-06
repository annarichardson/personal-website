/**
 * Skill.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import { PRIMARY_COLOR } from 'root/theme';

const Title = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: ${PRIMARY_COLOR};
  display: inline-block;
`;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TitleWrapper = styled.div`
  flex-basis: 35%;
`;

const BarWrapper = styled.div`
  flex-basis: 55%;
`;


export {
  Title,
  SkillWrapper,
  TitleWrapper,
  BarWrapper,
};
