import styled from 'styled-components'
import React from 'react';
import {TodoList} from './todoList/TodoList';
import {TodoEditor} from './todoEditor/TodoEditor';

export const ExReduxTodo = () => {

  return (
      <Wrapper>
        <Title className="hwTitle">TodoList - Redux</Title>

        <TodoEditor/>

        <TodoList/>
      </Wrapper>
  );
};

const Wrapper = styled.div`
`

const Title = styled.div`
`;