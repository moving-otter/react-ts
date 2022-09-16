import styled from 'styled-components'
import React from 'react';
import {TodoList} from './TodoList';
import {TodoEditor} from './TodoEditor';

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