import React from 'react';
import TodoEditor from './todoEditor/TodoEditor';
import TodoList from './todoList/TodoList';
import {createStore} from 'redux';
import {rootReducer} from './RootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const ExReduxTodo = () => {
  return (
      <Provider store={store}>
        <div className="exReduxTodo">
          <TodoEditor/>
          <TodoList/>
        </div>
      </Provider>
  );
};

export default ExReduxTodo;
