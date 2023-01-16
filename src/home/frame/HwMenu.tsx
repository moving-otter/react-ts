import styled from "styled-components";
import React from "react";
import { HashRouter, NavLink } from "react-router-dom";

export const HwMenu = () => {
  return (
    <Wrapper>
      <HashRouter>
        <Content>
          <NavLink exact to="/">
            Welcome
          </NavLink>
          <NavLink to="/exState">State</NavLink>
          <NavLink to="/exProps">Props</NavLink>
          <NavLink to="/exBasicSyntax">Basic Syntax</NavLink>
          <NavLink to="/exLifeCycle">Life Cycle</NavLink>
          <NavLink to="/exVeneer">Veneer</NavLink>
          <NavLink to="/exTodoList">TodoList</NavLink>
          <NavLink to="/exReduxTodo">Redux Todo</NavLink>
          <NavLink to="/exRedux">Redux</NavLink>
          <NavLink to="/exCart">Cart List</NavLink>
        </Content>
      </HashRouter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: rgb(60, 63, 65);
  border-bottom: 1px solid #515658;
`;

const Content = styled.div`
  a {
    color: rgb(187, 187, 187);
    padding: 5px 15px 2px 15px;
  }
  a:hover {
    background-color: rgb(53, 55, 57);
    border-bottom: 4px solid rgb(53, 55, 57);
  }
  .active {
    background-color: rgb(81, 86, 88);
    border-bottom: 4px solid rgb(67, 158, 184) !important;
  }
`;
