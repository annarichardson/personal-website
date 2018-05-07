/**
 * index.js
 * Written by: Anna Richardson
 */

export const middleScreenLocation = () => {
  return (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2) + window.scrollY;
};

export const DESKTOP_WIDTH = 992;
export const TABLET_WIDTH = 768;
export const PHONE_WIDTH = 400;

export default {
  middleScreenLocation,
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  PHONE_WIDTH,
};
