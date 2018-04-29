/**
 * index.js
 * Written by: Anna Richardson
 */

export const documentHeight = () => {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
  );
};

export const scrollHeight = () => {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + window.scrollY;
};

export default {
  documentHeight,
  scrollHeight,
};
