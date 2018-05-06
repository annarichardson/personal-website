/**
 * Experience.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import { BACKGROUND_GREY, PRIMARY_COLOR } from 'root/theme';

const ExperienceContainer = styled.div`
  width: 100%;
  background-color: ${BACKGROUND_GREY};
`;

const SubHeader = styled.h2`
  color: ${PRIMARY_COLOR};
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 2rem;
`;

export {
  ExperienceContainer,
  SubHeader,
};
