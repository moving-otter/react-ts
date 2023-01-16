import styled from "styled-components";
import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoEditor } from "./TodoEditor";
import { Todo } from "./TodoType";

export const ExTodoList = () => {
  const [itemObjList, setItemObjList] = useState<Todo[]>([]);

  const addItem = text => {
    if (text.length === 0) {
      return;
    }
    const newTodo: Todo = {
      key: Date.now(),
      text: text
    };
    setItemObjList([newTodo, ...itemObjList]);
  };

  const deleteItem = key => {
    setItemObjList(itemObjList.filter(e => e.key !== key));
  };

  const resetList = () => {
    setItemObjList([]);
  };

  return (
    <Wrapper>
      <Title className="hwTitle">TodoList</Title>

      <TodoEditor addItemFunc={addItem} resetListFunc={resetList} />

      <TodoList entries={itemObjList} deleteItemFunc={deleteItem} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.div``;
