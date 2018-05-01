/**
 * App.js
 * Written by: Connor Taylor
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Helmet } from 'react-helmet';

import routes from 'root/routes';

import {
  AppContainer,
  PageWrap,
} from './App.styles';

/**
 * The App view wraps all other views in the React application, providing a
 * consistent look and feel across all views
 */
export class App extends PureComponent {
  render() {
    return (
      <Router>
        <AppContainer>
          <Helmet>
            <title>
              Anna&apos;s Website
            </title>
          </Helmet>
          <PageWrap>
            <Switch>
              {
                routes.map((r) => <Route key={r.path} {...r} />)
              }
            </Switch>
          </PageWrap>
        </AppContainer>
      </Router>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  const PropTypes = require(`prop-types`); // eslint-disable-line
  App.propTypes = {

  };
}

export default connect(() => ({}), {

})(App);
