import { combineReducers } from 'redux';
import TodoReducer from './todo/TodoReducer';
import UiReducer from './ui/UiReducer';

export default combineReducers({
  TodoReducer,
  UiReducer,
});
