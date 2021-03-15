import * as types from "./types";

export const changeType = (type) => {
  return { type: types.CHANGE, newType: type };
};
