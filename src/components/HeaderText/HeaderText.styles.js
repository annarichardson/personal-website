/**
 * HeaderText.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import { PRIMARY_COLOR } from 'root/theme';

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: ${PRIMARY_COLOR};
`;

export default Header;
