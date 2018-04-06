/**
 * index.js
 * Written by: Anna Richardson
 * */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'normalize.css/normalize.css';

import App from 'views/App';

import store from 'store';
import theme from './theme';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('main'),
);

