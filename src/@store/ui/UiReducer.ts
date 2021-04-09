import {TOGGLE_SIDEBAR} from "./UiAction";

const initialState = {
  sidebar: true
};

const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        sidebar: !(state.sidebar)
      };
    default:
      return state;
  }
};

export default UiReducer;
