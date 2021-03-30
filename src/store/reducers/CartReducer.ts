import {ADD_ITEMS, DELETE_ITEMS} from "../actions/ActionTypes";

// const initialState = {
//   cartList: []
// };

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMS:
      if (state.filter(item => item.name === action.payload.name).length === 0) {
        // console.log(state.cartList);
        // return Object.assign({}, state, {
        //   cartList: state.cartList.push(action.payload)
        // });
        return [...state, action.payload];
      } else {
        return state;
      }
    case DELETE_ITEMS:
      // return Object.assign({}, state, {
      //   cartList: state.cartList.filter(item => item.name !== action.payload.name)
      // });
      return [...state.filter(item => item.name !== action.payload.name)];
    default:
      return state;
  }
};

export default cartReducer;