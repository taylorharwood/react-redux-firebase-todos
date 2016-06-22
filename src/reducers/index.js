import auth from './auth';
import todos from './todos';
import firebase from './firebase';
import settings from './settings';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: auth,
  todos: todos,
  firebase: firebase,
  settings: settings
});

export default rootReducer;