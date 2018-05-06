/**
 * Skills.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

const SkillsWrapper = styled.div`
`;

const TextWrapper = styled.div`
  max-width: 1200px;
  padding: 40px 180px;
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const SectionWrapper = styled.div`
  flex-basis: 45%;
`;

export {
  TextWrapper,
  Wrapper,
  SkillsWrapper,
  SectionWrapper,
};
