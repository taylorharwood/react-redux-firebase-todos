let initialState = {
  user: {},
  error: '',
  registerEmail: '',
  registerPassword: '',
  loginEmail: '',
  loginPassword: ''
};

const auth = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_REGISTER_EMAIL':
      return Object.assign({}, state, {
        registerEmail: action.email
      });
    case 'SET_REGISTER_PASSWORD':
      return Object.assign({}, state, {
        registerPassword: action.password
      });
    case 'SET_LOGIN_EMAIL':
      return Object.assign({}, state, {
        loginEmail: action.email
      });
    case 'SET_LOGIN_PASSWORD':
      return Object.assign({}, state, {
        loginPassword: action.password
      });
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        user: action.user
      });
    case 'LOGIN_FAILURE':
      return Object.assign({}, state, {
        error: action.error
      });
    case 'CREATE_USER_SUCCESS':
      return Object.assign({}, state, {
        user: action.user
      });
    case 'CREATE_USER_FAILURE':
      return Object.assign({}, state, {
        error: action.error
      });
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        user: {}
      });
    default:
      return state;
  }
};

export default auth;