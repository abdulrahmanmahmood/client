import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rooReducer = combineReducers({});
export const store = legacy_createStore(rooReducer, applyMiddleware(thunk));
