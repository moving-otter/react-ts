import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/Home';
import './index.scss';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./store/reducers/";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <Home/>
    </Provider>,
    document.getElementById('root')
);
