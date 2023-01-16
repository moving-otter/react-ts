import React from "react";
import { CounterHoc } from "./CounterHoc";
import { CounterReducer } from "./CounterReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const CounterStore = createStore(CounterReducer);

export const ExReduxCounter = () => {
  return (
    <Provider store={CounterStore}>
      <CounterHoc />
    </Provider>
  );
};
