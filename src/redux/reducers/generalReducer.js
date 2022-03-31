import { generalInitialState } from "../generalInitialState";
import { types } from "../types";
import { getData, storeData } from "../../storage";

const generalInitialStateFromDisk = getData("generalInitialStateFromDisk");

export function generalReducer(
  state = generalInitialStateFromDisk || generalInitialState,
  action
) {
  // console.log(action);
  switch (action.type) {
    case types.SET_USER_INPUT: {
      const result = { ...state, userInput: action.payload };
      storeData("generalInitialStateFromDisk", result);
      return result;
    }

    case types.SET_SCREEN: {
      let screen = action.payload;
      const result = { ...state, screen };
      storeData("generalInitialStateFromDisk", result);
      return result;
    }

    case types.SET_FILTER_OPTIONS: {
      const filterName = action.payload;
      const matchingFilter = { ...state.matchingFilter };
      matchingFilter[filterName] = !matchingFilter[filterName];

      const result = { ...state, matchingFilter };
      storeData("generalInitialStateFromDisk", result);
      return result;
    }

    case types.SET_CURRENT_USER_ID: {
      let currentUserId = action.payload;
      const result = { ...state, currentUserId };
      storeData("generalInitialStateFromDisk", result);
      return result;
    }
    case types.SET_LOGGED_IN_STATUS: {
      let loggedIn = action.payload;
      const result = { ...state, loggedIn };
      storeData("generalInitialStateFromDisk", result);
      return result;
    }

    case types.LOG_OUT: {
      let loggedIn = false;
      let currentUserId = null;
      let screen = 0;

      return { ...state, loggedIn, currentUserId, screen };
    }

    case types.BYPASS_ONBOARDING: {
      let screen = 1;

      return { ...state, screen };
    }
    default:
      return state;
  }
}
