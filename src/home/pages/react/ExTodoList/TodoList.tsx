import styled from 'styled-components'
import React from 'react';
import {Todo} from './TodoType';

export const TodoList = (props: {
  entries: Array<Todo>,
  deleteItemFunc: (_key) => void
}) => {

  return (
      <Wrapper>
        {props.entries.map((e: Todo) =>
          <Item key={e.key}>
            <li>{e.text}</li>
            <Button onClick={() => props.deleteItemFunc(e.key)}>
              x
            </Button>
          </Item>
        )}
      </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding: 20px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 40px;
  font-size: 20px;
`;