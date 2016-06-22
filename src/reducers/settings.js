let initialState = {
  filters: [
    { label: 'All', value: 'ALL'},
    { label: 'Done', value: 'DONE'},
    { label: 'Not Done', value: 'NOT_DONE'}
  ],
  activeFilter: 'ALL'
};

const settings = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_FILTER':
      return Object.assign({}, state, {
        activeFilter: action.filter
      });
    default:
      return state;
  }
};

export default settings;