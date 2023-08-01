import { DECREMENT, INCREMENT } from "../actions/actionType";
import Count from "../components/Count";

const initialState = { num: 0 };
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        num: state.num + 1,
      };
    }

    case DECREMENT: {
      return {
        ...state,
        num: state.num - 1,
      };
    }

    default: {
      return state;
    }
  }
};
