export const ADD_ITEMS = "cart/addItems";
export const DELETE_ITEMS = "cart/deleteItems";

export const addCart = item => {
  return {
    type: ADD_ITEMS,
    payload: item
  };
};

export const deleteCart = item => {
  return {
    type: DELETE_ITEMS,
    payload: item
  };
};
