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

// Uncomment the section below for performance testing
// import Perf from 'react-addons-perf';

// Perf.start();

// setTimeout(() => {
//   Perf.stop();
//   Perf.printWasted();
// }, 5000);

/**
 * The App view wraps all other views in the React application, providing a
 * consistent look and feel across all views
 */
export class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>
              Your App
            </title>
          </Helmet>
          <div className="page-wrap">
            <Switch>
              {
                routes.map((r) => <Route key={r.path} {...r} />)
              }
            </Switch>
          </div>
        </div>
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
