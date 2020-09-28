// import the dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";

// connect the app to the redux dev tools 
import { composeWithDevTools } from "redux-devtools-extension";

// setup initial state 
const initialState = {};

// import middleware
const middleware = [thunk];

// setup store 
const store = createStore(combineReducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))

// export
export default store;