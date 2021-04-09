import {Todo, TodoKey} from './TodoType';

export const ADD_TODO = 'todo/addTodo';
export const DELETE_TODO = 'todo/deleteTodo';
export const RESET_TODO = 'todo/resetTodo';

export const addTodo = (_payload: Todo) => {
  return {
    type: ADD_TODO,
    payload: _payload
  }
};

export const deleteTodo = (_payload: TodoKey) => {
  return {
    type: DELETE_TODO,
    payload: _payload
  }
};

export const resetTodo = () => {
  return {
    type: RESET_TODO,
  }
};
