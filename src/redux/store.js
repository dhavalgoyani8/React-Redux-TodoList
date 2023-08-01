import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { countReducer } from "./reducers/countReducer";

const rootReducer = combineReducers({ todoReducer, countReducer });

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
