import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import './TodoEditor.scoped.scss';

type props = {
  addItemFunc: (text) => void,
  resetListFunc: () => void
}

const TodoEditor: React.FC<props> = ({addItemFunc, resetListFunc}) => {
  const [inputText, setInputText] = useState<string>('');

  const handleText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);
  const handleEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      addItemFunc(inputText);
      setInputText('');
    }
  }, [addItemFunc, inputText]);

  return (
    <div className="todoEditor">
      <input
          type="text"
          placeholder="Enter task"
          onChange={handleText}
          onKeyDown={handleEnter}
          value={inputText}
      />
      <button
          onClick={() => {
            addItemFunc(inputText);
            setInputText('');
          }}
      >
        add
      </button>

      <button onClick={() => resetListFunc()}>
        reset
      </button>
    </div>
  );
};

export default TodoEditor;
