import {ADD_TODO, DELETE_TODO, RESET_TODO} from "./ActionTypes";
import {addActionType, deleteActionType, resetActionType} from '../type/TodoType';

export const addTodo = (_payload: addActionType) => {
  return {
    type: ADD_TODO,
    payload: _payload
  }
};

export const deleteTodo = (_payload: deleteActionType) => {
  return {
    type: DELETE_TODO,
    payload: _payload
  }
};

export const resetTodo = (_payload: resetActionType) => {
  return {
    type: RESET_TODO,
    payload: _payload
  }
};
