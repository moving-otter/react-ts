import {Todo} from "../type/TodoType";
import {ADD_TODO, DELETE_TODO, RESET_TODO,} from "../action/ActionTypes";

type TodoList = Todo[];

const initialState: TodoList = [];

const TodoReducer = (state: TodoList = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: Todo = {
        key: Date.now(),
        text: action.payload.text
      };
      return [...state, newTodo];
    case DELETE_TODO:
      return [...state.filter((e: Todo) => e.key !== action.payload.key)];
    case RESET_TODO:
      return [];
    default:
      return state;
  }
};

export default TodoReducer;
