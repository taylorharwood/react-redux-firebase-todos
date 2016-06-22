// React & ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// React-Redux
import { Provider } from 'react-redux';
// React-Router
import { Router, browserHistory } from 'react-router';
// Routes
import routes from './routes';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router 
      routes={routes} 
      history={browserHistory} 
    />
  </Provider>,
  document.getElementById("mount")
);


