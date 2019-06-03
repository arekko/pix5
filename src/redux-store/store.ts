
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";

const middleware = [thunkMiddleware, logger];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;