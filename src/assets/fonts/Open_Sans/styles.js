import { injectGlobal } from 'styled-components';

import Regular from 'assets/fonts/Open_Sans/opensans_regular.woff2';
import Semibold from 'assets/fonts/Open_Sans/opensans_semibold.woff2';
import Bold from 'assets/fonts/Open_Sans/opensans_bold.woff2';
/* eslint no-unused-expressions: 0 */

injectGlobal`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src: url(${Regular}) format('woff2');
  }
  @font-face {
    font-family: 'Open Sans Semibold';
    font-style: normal;
    font-weight: 600;
    src: url(${Semibold}) format('woff2');
  }
  @font-face {
    font-family: 'Open Sans Bold';
    font-style: normal;
    font-weight: 700;
    src: url(${Bold}) format('woff2');
  }
`;