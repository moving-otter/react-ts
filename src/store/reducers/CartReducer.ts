import {ADD_ITEMS, DELETE_ITEMS} from "../actions/ActionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMS:
      if (state.filter(item => item.name === action.payload.name).length === 0) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case DELETE_ITEMS:
      return [...state.filter(item => item.name !== action.payload.name)];
    default:
      return state;
  }
};

export default cartReducer;