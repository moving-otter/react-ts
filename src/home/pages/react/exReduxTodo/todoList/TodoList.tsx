import React from 'react';
import './TodoList.scoped.scss';
import {deleteTodo} from "@store/todo/TodoAction";
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state: RootStateOrAny) => state.TodoReducer);

  let domList;

  if (todoState.list.length > 0) {
    domList = todoState.list.map((e) =>
        <div key={e.key} className="item">
          <li>{e.text}</li>
          <button onClick={() => dispatch(deleteTodo({key: e.key}))}>
            x
          </button>
        </div>
    )
  } else {
    domList = '';
  }

  return (
      <ul className="todoList">
        {domList}
      </ul>
  );
};

export default TodoList;
