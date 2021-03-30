import {ADD_ITEMS, DELETE_ITEMS} from "./ActionTypes";

export const addCart = (item) => {
  return {
    type: ADD_ITEMS,
    payload: item
  }
};

export const deleteCart = (item) => {
  return {
    type: DELETE_ITEMS,
    payload: item
  }
};