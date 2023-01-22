import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "@store";
import { Home } from "./home/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

console.log("[react-ts] 230122 20:04");

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
