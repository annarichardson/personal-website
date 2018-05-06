/**
 * SectionWrap.styles.js
 * Written by: Anna Richardson
 */

import styled from 'styled-components';
import media from 'utils/media';

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 40px 180px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  ${media.desktop`
    width: 750px;
  `}
  ${media.tablet`
    padding: 40px 50px;
    width: 100%;
  `}
  ${media.phone`
    padding: 40px 20px;
    width: 100%;
  `}
`;

export default Wrapper;
