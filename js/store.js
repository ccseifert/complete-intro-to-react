// @flow

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// f = f is an "identity function" - a function that means nothing but is a placeholder to return
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f,
  ),
);

export default store;
