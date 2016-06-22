let initialState = [];

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO_SUCCESS':
      return [...state, action.todo];
    case 'TOGGLE_TODO_SUCCESS':
      return state.map(todo => {
        return todo.fbKey === action.key ? Object.assign({}, todo, { done: !todo.done }) : todo;
      });
    case 'EDIT_TODO':
      return state.map(todo => {
        todo.fbKey === action.key ? Object.assign({}, action.todo, null) : todo;
      });
    case 'REMOVE_TODO_SUCCESS':
      let todo = state.filter(todo => {
        return todo.fbKey === action.key;
      })[0];
      let index = state.indexOf(todo);
      let front = state.slice(0, index);
      let back  = state.slice(index + 1);
      return front.concat(back);
    case 'CLEAR_TODOS':
      return initialState;
    default:
      return state;
  }
};

export default todos;