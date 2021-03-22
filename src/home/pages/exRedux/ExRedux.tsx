import React from 'react';
import './ExRedux.scss';
import TodoEditor from './todoEditor/TodoEditor';
import TodoList from './todoList/TodoList';
import {createStore} from 'redux';
import {rootReducer} from './RootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const ExRedux = () => {
  return (
      <Provider store={store}>
        <div className="exRedux">
          <TodoEditor/>
          <TodoList/>
        </div>
      </Provider>
  );
};

export default ExRedux;
