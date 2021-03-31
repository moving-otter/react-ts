import {ADD_TODO, DELETE_TODO, RESET_TODO} from "./ActionTypes";
import {Todo, TodoKey} from '../type/TodoType';

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

export const resetTodo = (_payload) => {
  return {
    type: RESET_TODO,
    payload: _payload
  }
};
