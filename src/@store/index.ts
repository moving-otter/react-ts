import { combineReducers } from 'redux';
import CartReducer from './cart/CartReducer';
import TodoReducer from './todo/TodoReducer';
import UiReducer from './ui/UiReducer';

export default combineReducers({
  CartReducer,
  TodoReducer,
  UiReducer,
});
