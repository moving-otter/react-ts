import React, {useState} from 'react';
import TodoList from './todoList/TodoList';
import TodoEditor from './todoEditor/TodoEditor';
import {Todo} from './TodoType';

const ExTodoList: React.FC = () => {
  const [itemObjList, setItemObjList] = useState<Todo[]>([]);

  const addItem = (text) => {
    if (text.length === 0) {
      return ;
    }
    const newTodo: Todo = {
      key: Date.now(),
      text: text
    };
    setItemObjList([newTodo, ...itemObjList]);
  };

  const deleteItem = (key) => {
    setItemObjList(itemObjList.filter(e => e.key !== key));
  };

  const resetList = () => {
    setItemObjList([]);
  };

  return (
      <div className="exTodoList">
        <div className="hwTitle">TodoList</div>

        <TodoEditor
            addItemFunc={addItem}
            resetListFunc={resetList}
        />

        <TodoList
            entries={itemObjList}
            deleteItemFunc={deleteItem}
        />
      </div>
  );
};

export default ExTodoList;
