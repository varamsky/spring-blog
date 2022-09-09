import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';
import rootReducer from "./rootReducer.js";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;
