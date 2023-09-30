import { applyMiddleware, combineReducers, createStore } from "redux";  // Fix typo here: combineReducers instead of combineReducer
import thunk from "redux-thunk";

const rootReducer = combineReducers({});  // Fix typo here: rootReducer instead of rooReducer
 const store = createStore(rootReducer, applyMiddleware(thunk));  // Use createStore instead of legacy_createStore

