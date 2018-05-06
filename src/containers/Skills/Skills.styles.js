/**
 * Skills.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';
import media from 'utils/media';

const SkillsWrapper = styled.div`
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
  flex-basis: 45%;
  ${media.desktop`
    flex-basis: 100%;
  `}
`;

export {
  Wrapper,
  SkillsWrapper,
  SectionWrapper,
};
