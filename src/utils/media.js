import { css } from 'styled-components';
import { DESKTOP_WIDTH, TABLET_WIDTH, PHONE_WIDTH } from 'utils';

export const sizes = {
  desktop: DESKTOP_WIDTH,
  tablet: TABLET_WIDTH,
  phone: PHONE_WIDTH,
};

/**
 * Helper for generating media queries in styled components. Each key of the
 * object wraps the provided css in a media query with a `max-width` dependent
 * on the key used.
 *
 * desktop: `992px`
 * tablet: `768px`
 * phone: `400px`
 *
 * Nearly identical to the example [here](https://www.styled-components.com/docs/advanced#media-templates)
 *
 *
 * @example
 *
 * css`
 *   background: #f00;
 *
 *   ${media.phone`
 *     background: #0f0;
 *   `}
 *
 *   ${media.tablet`
 *     background: #00f;
 *   `}
 * `;
 */
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`@media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

/** @component */
export default media;
