import * as types from "../types";

export function updateToken(value) {
  return {
    type: types.UPDATETOKEN,
    payload: value
  };
}

export function updateUser(value) {
  return {
    type: types.UPDATEUSER,
    payload: value
  };
}
