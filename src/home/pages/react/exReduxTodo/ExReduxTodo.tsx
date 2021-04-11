import React from 'react';
import TodoList from './todoList/TodoList';
import TodoEditor from './todoEditor/TodoEditor';

const ExReduxTodo = () => {

  return (
      <div className="exReduxTodo">
        <div className="hwTitle">TodoList - Redux</div>

        <TodoEditor/>

        <TodoList/>
      </div>
  );
};

export default ExReduxTodo;
