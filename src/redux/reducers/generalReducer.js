import { initialState } from "../initialState";
import { types } from "../types";

export function generalReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case types.SET_USER_INPUT:
      return { ...state, userInput: action.payload };
    case types.SET_SCREEN:
      let screen = action.payload;
      return { ...state, screen };

    default:
      return state;
  }
}
