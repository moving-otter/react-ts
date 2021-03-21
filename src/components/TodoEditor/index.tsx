import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import {actions} from "../../features";
import {useDispatch} from "react-redux";

export const TodoEditor: React.FC = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');

  const handleText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);
  const handleEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (inputText && e.keyCode === 13) {
      dispatch(actions.addTodos({
        text: inputText,
        isDone: false
      }));
      setInputText('');
    }
  }, [dispatch, inputText]);

  return (
      <div>
        <input
            type='text'
            onChange={handleText}
            onKeyDown={handleEnter}
            value={inputText}
            className='txt-input'
            placeholder='write something here...'
        />
      </div>
  );
};

export default TodoEditor;
