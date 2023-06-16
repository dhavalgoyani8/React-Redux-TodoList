import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_TODO,
  EDIT_TODO,
  SHOW_ALL_TODO,
  DELETE_ALL_COMPLETE_TODO,
  DELETE_ALL_TODO,
  PENDING_TODO,
  COMPLETE_TODO,
} from "../actions/actionType";

const initialState = { todoList: [], filterString: "" };
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO: {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: Math.random(),
            task: action.payload,
            isComplete: false,
          },
        ],
      };
    }

    case DELETE_TODO: {
      let dlt = state.todoList.filter((element) => {
        return action.payload !== element.id;
      });
      return {
        ...state,
        todoList: dlt,
      };
    }

    case CHECK_TODO:
      let check = state.todoList.map((element) => {
        if (action.payload === element.id) {
          return { ...element, isComplete: !element.isComplete };
        } else {
          return element;
        }
      });
      return {
        ...state,
        todoList: check,
      };

    case EDIT_TODO: {
      let edit = state.todoList.map((element) => {
        if (action.payload.updateTodoTaskId === element.id) {
          return { ...element, task: action.payload.updateTodoTaskValue };
        }
        return element;
      });
      return {
        ...state,
        todoList: edit,
      };
    }

    case DELETE_ALL_COMPLETE_TODO: {
      let complete = state.todoList.filter((element) => !element.isComplete);

      return {
        ...state,
        todoList: complete,
      };
    }

    case DELETE_ALL_TODO: {
      return {
        ...state,
        todoList: [],
      };
    }

    case SHOW_ALL_TODO: {
      return {
        ...state,
        filterString:SHOW_ALL_TODO,
      };
    }

    case PENDING_TODO: {
      return {
        ...state,
        filterString: PENDING_TODO,
      };
    }

    case COMPLETE_TODO: {
      return {
        ...state,
        filterString: COMPLETE_TODO,
      };
    }

    default:
      return state;
  }
};
