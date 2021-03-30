import React from 'react';
import TodoList from './todoList/TodoList';
import TodoEditor from './todoEditor/TodoEditor';
import TodoReducer from './store/reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(TodoReducer);

const ExReduxTodo = () => {

  return (
      <Provider store={store}>
        <div className="exReduxTodo">
          <div className="hwTitle">TodoList - Redux</div>

          <TodoEditor/>

          <TodoList/>
        </div>
      </Provider>
  );
};

export default ExReduxTodo;
