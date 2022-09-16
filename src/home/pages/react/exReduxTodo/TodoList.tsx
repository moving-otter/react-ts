import styled from 'styled-components'
import React from 'react';
import {deleteTodo} from "@store/todo/TodoAction";
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

export const TodoList = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state: RootStateOrAny) => state.TodoReducer);

  let domList;

  if (todoState.list.length > 0) {
    domList = todoState.list.map((e) =>
        <Item key={e.key}>
          <li>{e.text}</li>
          <Button onClick={() => dispatch(deleteTodo({key: e.key}))}>
            x
          </Button>
        </Item>
    )
  } else {
    domList = '';
  }

  return (
      <Wrapper>
        {domList}
      </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding: 20px;
`

const Item  = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 40px;
  font-size: 20px;
`;