import * as types from "./types";

export const changeLevel = (level) => {
  return { type: types.CHANGE_LEVEL, newLevel: level };
};
