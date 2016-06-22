export const addTodo = todo => {
  return (dispatch, getState) => {
    const firebase = getState().firebase;
    const user = getState().auth.user;
    if (user) {
      firebase.database().ref('todos/' + user.uid).push(todo);
    } else {
      console.error('Sorry, but you need to login to add todos!');
    }
  }
}

export const addTodoSuccess = todo => {
  return {
    type: 'ADD_TODO_SUCCESS',
    todo: todo
  }
}

export const addTodoError = todo => {
  return {
    type: 'ADD_TODO_ERROR',
    todo: todo
  }
}

export const removeTodo = key => {
  return (dispatch, getState) => {
    const firebase = getState().firebase;
    const user = getState().auth.user;
    firebase.database().ref('/todos/' + user.uid + '/' + key).remove();
  }
}

export const removeTodoSuccess = key => {
  return {
    type: 'REMOVE_TODO_SUCCESS',
    key: key
  }
}

const removeTodoError = key => {
  return {
    type: 'REMOVE_TODO_ERROR',
    key: key
  }
}

export const editTodo = key => {
  return (dispatch, getState) => {

  }
}

const editTodoSuccess = key => {
  return {
    type: 'EDIT_TODO_SUCCESS',
    key: key
  }
}

const editTodoError = key => {
  return {
    type: 'EDIT_TODO_ERROR',
    key: key
  }
}

export const toggleTodo = key => {
  return (dispatch, getState) => {
    const firebase = getState().firebase;
    const user = getState().auth.user;
    firebase.database().ref('/todos/' + user.uid + '/' + key).update({
      done: !getState().todos.filter(todo => todo.fbKey === key)[0].done
    });
  }
}

export const toggleTodoSuccess = key => {
  return {
    type: 'TOGGLE_TODO_SUCCESS',
    key: key
  }
}

const toggleTodoError = key => {
  return {
    type: 'TOGGLE_TODO_ERROR',
    key: key
  }
}

export const clearTodos = () => {
  return {
    type: 'CLEAR_TODOS'
  }
}