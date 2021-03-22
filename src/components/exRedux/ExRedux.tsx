import React from 'react';
import './ExRedux.scss';
import TodoEditor from './TodoEditor/TodoEditor';
import TodoList from './TodoList/TodoList';

const ExRedux = () => {
  return (
      <div className="exRedux">
        <h1>Todo List</h1>
        <TodoEditor/>
        <TodoList/>
      </div>
  )
};

export default ExRedux;
