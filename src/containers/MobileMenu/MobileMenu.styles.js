/**
 * MobileMenu.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';
import FaBars from 'react-icons/lib/fa/bars';

import { DARK_GREY, MEDIUM_GREY, PRIMARY_COLOR } from 'root/theme';

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${DARK_GREY};
  z-index: 1000;
`;

const MenuWrapper = styled.div`
  display: ${(props) => props.open ? `block` : `none`};
  z-index: 1000;
  top: 50px;
  width: 100%;
  position: absolute;
  border-top: 2px ${MEDIUM_GREY} solid;
`;

const MenuItem = styled.a`
  display: block;
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
`;

const MenuIcon = styled(FaBars)`
  color: white;
  vertical-align: middle;
  float: right;
  padding: 0.5rem 1rem;
  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

export {
  MenuWrapper,
  MenuItem,
  Header,
  MenuIcon,
};

