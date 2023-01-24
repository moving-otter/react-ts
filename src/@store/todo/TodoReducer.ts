import { Todo } from './TodoType';
import { ADD_TODO, DELETE_TODO, RESET_TODO } from './TodoAction';

// type TodoList = Todo[];
// const initialState: TodoList = [];

const initialState = {
  list: [],
  name: '',
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        list: [...state.list, action.payload],
        name: 'add',
      };
    case DELETE_TODO:
      return {
        list: [...state.list.filter((e: Todo) => e.key !== action.payload.key)],
        name: 'delete',
      };
    case RESET_TODO:
      return initialState;
    default:
      return state;
  }
};

export default TodoReducer;
