import styled from 'styled-components'
import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import {Todo} from "@store/todo/TodoType";
import {useDispatch} from 'react-redux';
import {addTodo, resetTodo} from '@store/todo/TodoAction';

export const TodoEditor = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');

  const addItem = useCallback(() => {
    const newTodo: Todo = {
      key: Date.now(),
      text: inputText
    };
    dispatch(addTodo(newTodo));
    setInputText('');
  }, [inputText, dispatch]);

  const handleText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const handleEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (inputText && e.keyCode === 13) {
      addItem();
    }
  }, [addItem, inputText]);

  return (
      <Wrapper>
        <Input
            type='text'
            placeholder='Enter task'
            onChange={handleText}
            onKeyDown={handleEnter}
            value={inputText}
        />
        <Button onClick={() => addItem()}>
          add
        </Button>

        <Button onClick={() => dispatch(resetTodo())}>
          reset
        </Button>
      </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const Input = styled.input`
  padding-left: 5px;
  font-size: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  font-size: 20px;
`;