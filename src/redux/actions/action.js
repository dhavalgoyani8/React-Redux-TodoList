import { ADD_TODO, CHECK_TODO, DELETE_TODO, EDIT_TODO } from "./actionType";

export const addTodo = (val) => {
  return {
    type: ADD_TODO,
    payload: val,
  };
};

export const deleteTodo = (val) => {
  return {
    type: DELETE_TODO,
    payload: val,
  };
};

export const checkTodo = (val) => {
  return {
    type: CHECK_TODO,
    payload: val,
  };
};

export const editTodo = (val) => {
    console.log(val);
  return {
    type: EDIT_TODO,
    payload: val,
  };
};
