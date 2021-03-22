import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {rootReducer} from './components/exRedux/features/index';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);
