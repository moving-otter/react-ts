import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "@store";
import { Home } from "./home/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

console.log("[react-ts] build by ZOL");

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
