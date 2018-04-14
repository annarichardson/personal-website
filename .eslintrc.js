var path = require('path');

module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb"],
  env: {
    "browser": true,
    "jest": true
  },
  rules: {
    "arrow-parens": [2, "always"],
    "react/jsx-filename-extension": [0],
    "react/jsx-curly-spacing": [0],
    "import/no-extraneous-dependencies": [0],
    "arrow-body-style": [0],
    "import/no-named-as-default": [0],
    "react/require-default-props": [0],
    "react/forbid-prop-types": [0],
    "quotes": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "max-len": [0],
    "react/no-children-prop": [0],
    "react/prop-types": [1],
    "react/no-array-index-key": [0],
    "react/jsx-boolean-value": [0],
    "no-nested-ternary": [0],
    "react/prefer-stateless-function": [0],
    "no-confusing-arrow": [0],
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.js'),
      }
    }
  }
}
