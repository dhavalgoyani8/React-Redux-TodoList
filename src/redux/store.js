import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";

export const store = createStore(combineReducers({todoReducer}))