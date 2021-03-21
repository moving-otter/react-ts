import React from 'react';
import {default as TodoEditor} from './TodoEditor';
import {default as TodoList} from './TodoList';

const App = () => {
  return (
      <div className='container'>
        <h1 className='title'>Todo List</h1>
        <TodoEditor/>
        <TodoList/>
      </div>
  );
};

export default App;
