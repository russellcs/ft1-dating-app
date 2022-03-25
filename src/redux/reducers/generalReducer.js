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

    case types.SET_FILTER_OPTIONS:
      const filterName = action.payload;

      const matchingFilter = { ...state.matchingFilter };
      matchingFilter[filterName] = !matchingFilter[filterName];

      return { ...state, matchingFilter };

    default:
      return state;
  }
}
