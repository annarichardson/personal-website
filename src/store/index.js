import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

// import alert from './alert/reducers';
import pending from './pending/reducers';

export const history = createHistory();

const rootReducer = combineReducers({
  // alert,
  pending,
});

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = require(`redux-logger`).createLogger({ // eslint-disable-line
    collapsed: true,
  });

  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
