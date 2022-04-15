import * as types from "../types";

const initialState = {
  from: null,
  to: null,
};

export const currentDate = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SETDATERANGE:
      const { from, to } = payload;

      return { from, to };

    default:
      return state;
  }
};
