const initialState = {}

const firebase = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FIREBASE_REF':
      return Object.assign({}, state, action.firebase);
    default:
      return state;
  }
};

export default firebase;