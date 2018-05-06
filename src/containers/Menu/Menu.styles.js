/**
 * Header.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import { DARK_GREY, PRIMARY_COLOR } from 'root/theme';

const MenuWrapper = styled.div`
  position: fixed;
  right: 50px;
  top: 40%
  background-color: ${DARK_GREY};
  border-radius: 3px;
`;

const MenuItem = styled.a`
  display: block;
  width: 85px;
  padding: 25px 16px;
  font-family: 'Open Sans', sans-serif;
  color: white;
  background-color: ${(props) => props.selected ? PRIMARY_COLOR : DARK_GREY};
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: ${PRIMARY_COLOR};
  }
  &:first-of-type {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  &:last-of-type {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export {
  MenuWrapper,
  MenuItem,
};

