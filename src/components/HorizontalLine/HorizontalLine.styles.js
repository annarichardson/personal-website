/*
 * styles.js
 * Written by: Anna Ricahrdson
 *
 * Exports the styled components used in the HorizontalLine component.
 */

import styled from 'styled-components';

import { DARK_GREY } from 'root/theme';

const Line = styled.hr`
  border: 0;
  border-top: 1px solid ${DARK_GREY};
  opacity: 0.2;
  margin-bottom: 2rem;
`;

export default Line;
