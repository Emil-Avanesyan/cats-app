import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import middleware from "./middleware";

const store = createStore(reducers, applyMiddleware(middleware));

export default store;