/**
 * data.js
 * Written by: Anna Richardson
 */

/**
 * Description of the data reducer
 */

const initialState = {
  section: `title`,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case `SELECT_SECTION`:
      return {
        ...state,
        section: action.section,
      };
    default:
      return state;
  }
};

export default data;
