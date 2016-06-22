import firebase from 'firebase';
import config from '../../config';
import { addTodoSuccess, removeTodoSuccess, toggleTodoSuccess, clearTodos } from './todos';
import { loginSuccess, logoutSuccess } from './auth';

const setFirebase = firebase => {
  return {
    type: 'SET_FIREBASE_REF',
    firebase: firebase
  }
}

export const initFirebase = () => {
  return dispatch => {
    firebase.initializeApp(config);
    dispatch(setFirebase(firebase));
    dispatch(registerListeners());
  }
}

export const registerListeners = () => {
  var todo, key;

  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // user was logged in, start listening
        dispatch(loginSuccess(user));

        const firebase = getState().firebase;
        const todos = firebase.database().ref('/todos/' + user.uid);

        todos.on('child_added', data => {
          todo = data.val();
          todo.fbKey = data.key;
          dispatch(addTodoSuccess(todo));
        });

        todos.on('child_removed', data => {
          key = data.key;
          dispatch(removeTodoSuccess(key));
        });

        todos.on('child_changed', data => {
          key = data.key;
          dispatch(toggleTodoSuccess(key));
        });
      } else {
        // user was logged out
        dispatch(logoutSuccess());
        dispatch(clearTodos());
      }
    });
  }  
}