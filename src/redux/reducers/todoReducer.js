import {
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../actions/actionType";

const initialState = [];
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return action.payload;

    case CHECK_TODO:
      return action.payload;

    case EDIT_TODO:
      return action.payload;

    default:
      return state;
  }
};
