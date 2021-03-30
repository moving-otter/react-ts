import React from 'react';
import './TodoList.scoped.scss';
import {Todo} from '../TodoType';

type props = {
  entries: Array<Todo>,
  deleteItemFunc: (_key) => void
}

const TodoList: React.FC<props> = ({entries, deleteItemFunc}) => {

  return (
      <ul className="todoList">
        {entries.map((e: Todo) =>
          <div key={e.key} className="item">
            <li>{e.text}</li>
            <button onClick={() => deleteItemFunc(e.key)}>
              x
            </button>
          </div>
        )}
      </ul>
  );
};

export default TodoList;
