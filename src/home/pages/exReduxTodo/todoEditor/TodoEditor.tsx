import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import './TodoEditor.scoped.scss';
import {addTodo, resetTodo} from '../store/action';
import {useDispatch} from 'react-redux';

export const TodoEditor: React.FC = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');

  const handleText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);
  const handleEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (inputText && e.keyCode === 13) {
      dispatch(addTodo({text: inputText}));
      setInputText('');
    }
  }, [inputText, dispatch]);

  return (
      <div className="todoEditor">
        <input
            type='text'
            placeholder='Enter task'
            onChange={handleText}
            onKeyDown={handleEnter}
            value={inputText}
        />
        <button
            onClick={() => {
              dispatch(addTodo({text: inputText}));
              setInputText('');
            }}
        >
          add
        </button>

        <button onClick={() => dispatch(resetTodo({}))}>
          reset
        </button>
      </div>
  );
};

export default TodoEditor;
