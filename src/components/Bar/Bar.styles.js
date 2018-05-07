/**
 * Bar.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';

import { PRIMARY_COLOR, BACKGROUND_GREY } from 'root/theme';

const BarValue = styled.span`
  position: absolute;
  background: ${PRIMARY_COLOR};
  height: 12px;
  width: ${(props) => `${(100 * (props.value / props.maxValue))}%`};
`;

const BarContainer = styled.div`
  display: inline-block;
  background: ${BACKGROUND_GREY};
  height: 12px;
  width: 100%;
  position: relative;
  transition: all .2s ease-in-out;
`;


export {
  BarValue,
  BarContainer,
};
