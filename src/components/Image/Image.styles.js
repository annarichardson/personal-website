/*
 * styles.js
 * Written by: Anna Ricahrdson
 *
 */

import styled from 'styled-components';

const ImageDiv = styled.img`
  height: ${(props) => props.height
    ? typeof props.height === `string`
      ? props.height
      : `${props.height}px`
    : ``};
  width: ${(props) => props.width
    ? typeof props.width === `string`
      ? props.width
      : `${props.width}px`
    : ``};
  cursor: ${(props) => props.onClick ? `pointer` : `default`}
`;

export default ImageDiv;
