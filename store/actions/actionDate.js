import * as types from "../types";

export const setDateRange = (from, to) => {
  return {
    type: types.SETDATERANGE,
    payload: { from, to },
  };
};