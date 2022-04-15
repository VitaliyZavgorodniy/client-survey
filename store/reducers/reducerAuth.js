import * as types from "../types";

const initialState = {
  user: null,
  token: null,
};

export const dataAuth = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATETOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case types.UPDATEUSER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
