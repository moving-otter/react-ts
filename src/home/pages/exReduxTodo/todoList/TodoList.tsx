import React from 'react';
import './TodoList.scoped.scss';
import {deleteTodo} from "../store/action";
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

export const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state: RootStateOrAny) => state.TodoReducer);

  let list;

  if (reducer.length > 0) {
    list = reducer.map((e) =>
        <div key={e.key} className="item">
          <li>{e.text}</li>
          <button onClick={() => dispatch(deleteTodo({key: e.key}))}>
            x
          </button>
        </div>
    )
  } else {
    list = '';
  }

  return (
      <ul className="todoList">
        {list}
      </ul>
  );
};

export default TodoList;
