/**
 * Skill.styles.js
 * Written by: Anna Richardson
 */

import styled, { keyframes } from 'styled-components';

import { PRIMARY_COLOR } from 'root/theme';

const gradientWave = keyframes`
  0% {
    background-position: -240px 0;
  }
  100% {
    background-position: 240px 0;
  }
`;

const Title = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  color: ${PRIMARY_COLOR};
  display: inline-block;
`;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
  &:hover div {
    animation-fill-mode: forwards;
    transform: scale(1.1);
  }
  &:hover span {
    background: linear-gradient(45deg, ${PRIMARY_COLOR}, #66b19c, ${PRIMARY_COLOR});
    animation: ${gradientWave} 2s linear infinite;
  }
`;

const TitleWrapper = styled.div`
  flex-basis: 35%;
`;

const BarWrapper = styled.div`
  flex-basis: 55%;
  vertical-align: middle;
`;


export {
  Title,
  SkillWrapper,
  TitleWrapper,
  BarWrapper,
};
