/**
 * Header.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import { DARK_GREY, PRIMARY_COLOR } from 'root/theme';

const MenuWrapper = styled.div`
  position: fixed;
  right: 50px;
  top: 50%
  background-color: ${DARK_GREY};
`;

const MenuItem = styled.a`
  display: block;
  width: 100px;
  padding: 25px 16px;
  font-family: 'Open Sans', sans-serif;
  color: white;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: ${PRIMARY_COLOR};
  }
`;

export {
  MenuWrapper,
  MenuItem,
};

