import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_TODO,
  EDIT_TODO,
  SHOW_ALL_TODO,
  DELETE_ALL_TODO,
  DELETE_ALL_COMPLETE_TODO,
  PENDING_TODO,
  COMPLETE_TODO,
} from "./actionType";

export const addTodo = (inputValue) => {
  return {
    type: ADD_TODO,
    payload: inputValue,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const checkTodo = (id) => {
  return {
    type: CHECK_TODO,
    payload: id,
  };
};

export const editTodo = (updateTodoTaskId, updateTodoTaskValue) => {
  return {
    type: EDIT_TODO,
    payload: {
      updateTodoTaskId: updateTodoTaskId,
      updateTodoTaskValue: updateTodoTaskValue,
    },
  };
};

export const deleteAllCompleteTodo = () => {
  return {
    type: DELETE_ALL_COMPLETE_TODO,
  };
};

export const deleteAllTodo = () => {
  return {
    type: DELETE_ALL_TODO,
  };
};

 export const showAllTodo = () => {
  return {
    type: SHOW_ALL_TODO,
  };
};

export const pendingTodo = () => {
    return {
        type:PENDING_TODO,
    }
}

export const completeTodo = () => {
    return {
        type:COMPLETE_TODO,
    }
}
