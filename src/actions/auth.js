export const setLoginEmail = email => {
  return {
    type: 'SET_LOGIN_EMAIL',
    email: email
  }
}

export const setLoginPassword = password => {
  return {
    type: 'SET_LOGIN_PASSWORD',
    password: password
  }
}

export const login = () => {
  return (dispatch, getState) => {
    const auth = getState().firebase.auth(); 
    const email = getState().auth.loginEmail;
    const password = getState().auth.loginPassword;

    auth.signInWithEmailAndPassword(email, password)
      .then(user => dispatch(loginSuccess(user)))
      .catch(error => dispatch(loginFailure(error)));
  }
};

export const loginSuccess = user => {
  return {
    type: 'LOGIN_SUCCESS',
    user: user
  }
};

const loginFailure = error => {
  return {
    type: 'LOGIN_FAILURE',
    error: error
  }
};

export const setRegisterEmail = email => {
  return {
    type: 'SET_REGISTER_EMAIL',
    email: email
  }
}

export const setRegisterPassword = password => {
  return {
    type: 'SET_REGISTER_PASSWORD',
    password: password
  }
}

export const createUser = () => {
  return (dispatch, getState) => {
    const auth = getState().firebase.auth(); 
    const email = getState().auth.registerEmail;
    const password = getState().auth.registerPassword;

    auth.createUserWithEmailAndPassword(email, password)
      .then(user => dispatch(createUserSuccess(user)))
      .catch(error => dispatch(createUserFailure(error)));
  }
};

const createUserSuccess = user => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user: user
  }
};

const createUserFailure = error => {
  return {
    type: 'CREATE_USER_FAILURE',
    error: error
  }
};

export const logout = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut();
  }
}

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

export const loginWithGoogle = () => {
  return (dispatch, getState) => {
    const firebase = getState().firebase;

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      dispatch(loginSuccess(result.user));
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      dispatch(loginFailure(error));
    });
  }
}