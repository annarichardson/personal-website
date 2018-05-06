/**
 * Bar.styles.js
 * Written by: Anna Richardson
 */

import styled, { keyframes } from 'styled-components';

import { PRIMARY_COLOR, BACKGROUND_GREY } from 'root/theme';

const gradientWave = keyframes`
  0% {
    background-position: -240px 0;
  }
  100% {
    background-position: 240px 0;
  }
`;


const BarValue = styled.span`
  display: inline-block;
  background: ${PRIMARY_COLOR};
  height: 15px;
  width: ${(props) => `${(100 * (props.value / props.maxValue))}%`};
`;

const BarContainer = styled.div`
  display: inline-block;
  background: ${BACKGROUND_GREY};
  height: 15px;
  width: 100%;
  display: inline-block;
  transition: all .2s ease-in-out;
  &:hover {
    animation-fill-mode: forwards;
    transform: scale(1.1);
  }
  &:hover span {
    background: linear-gradient(45deg, ${PRIMARY_COLOR}, #66b19c, ${PRIMARY_COLOR});
    animation: ${gradientWave} 2s linear infinite;
  }
`;


export {
  BarValue,
  BarContainer,
};
