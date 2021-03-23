import {useDispatch, useSelector} from 'react-redux';
import {actions, RootState, selectTodoList, Todo} from '../RootReducer';
import React, {useCallback} from 'react';

export const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todos));
  const handleCheckbox = useCallback((item: Todo) => {
    dispatch(actions.toggleTodos(item));
  }, [dispatch]);

  console.log(todoList);

  return (
      <ul>
        {todoList.map((item: Todo) => (
            <li key={item.id}>
              <label>
                <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={handleCheckbox.bind({}, item)}
                    className='chk-input'
                />
                <span className={item.isDone ? 'txt-complete' : ''}>
                  {item.text}
                </span>
              </label>
            </li>
        ))}
      </ul>
  );
};

export default TodoList;
