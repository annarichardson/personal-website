/**
 * App.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import { DARK_GREY } from 'root/theme';

const AppContainer = styled.div`
  height: 100%;
  font-family: 'Open Sans', sans-serif,
  color: ${DARK_GREY},
`;

const PageWrap = styled.div`
  height: 100%;
`;

export {
  AppContainer,
  PageWrap,
};

