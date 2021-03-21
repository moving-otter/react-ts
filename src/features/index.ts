import {
  combineReducers,
  createAction,
  createSelector,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {generate as generateRandomStr} from 'randomstring';

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

export interface TodoList {
  list: Todo[];
}

const initialState: TodoList = {
  list: [],
};
const actionPrefix = 'TODOS';
const addTodos = createAction<object>(`${actionPrefix}/add`);
const toggleTodos = createAction<object>(`${actionPrefix}/toggle`);
const reducers = {
  add: ({list}: TodoList, {payload: {text, isDone}}: PayloadAction<Todo>) => {
    const newTodo: Todo = {
      id: generateRandomStr(5),
      text: text.toString(),
      isDone
    };
    list.push(newTodo);
  },
  toggle: ({list}: TodoList, {payload: {id, isDone}}: PayloadAction<Todo>) => {
    const targetIndex = list.findIndex((item: Todo) => item.id === id);
    list[targetIndex].isDone = !isDone;
  },
};
const todoSlice = createSlice({
  reducers,
  initialState,
  name: actionPrefix,
});
export const selectTodoList = createSelector(
    (state: TodoList) => state.list,
    (list: Todo[]) => list,
);
export const actions = {
  addTodos,
  toggleTodos
};
export const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});
console.log(todoSlice)
export type RootState = ReturnType<typeof rootReducer>
