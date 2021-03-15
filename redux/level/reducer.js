import * as actionTypes from "./types";

const levelInitialState = {
  level: ""
};

export default function reducer(state = levelInitialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LEVEL:
      return Object.assign({}, state, {
        level: action.newLevel
      });
    default:
      return state;
  }
}
