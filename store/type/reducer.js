import { typeActionTypes } from "./action";

const typeInitialState = {
  type: ""
};

export default function reducer(state = typeInitialState, action) {
  switch (action.type) {
    case typeActionTypes.CHANGE:
      return Object.assign({}, state, {
        type: action.newType
      });
    default:
      return state;
  }
}
