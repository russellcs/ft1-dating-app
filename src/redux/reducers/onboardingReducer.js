import { onboardingInitialState } from "../onboardingInitialState";
import { types } from "../types";
import { dataConstructor } from "../../config/formConfig";
import { getData, storeData } from "../../storage";

const onboardingInitialStateFromDisk = getData(
  "onboardingInitialStateFromDisk"
);

export function onboardingReducer(
  state = onboardingInitialStateFromDisk || onboardingInitialState,
  action
) {
  switch (action.type) {
    case types.SET_ONBOARDING_SCREEN:
      let screen = action.payload;
      const result = { ...state, screen };
      storeData("onboardingInitialStateFromDisk", result);
      return result;

    case types.SET_REGISTER_SCREEN: {
      let regScreen = action.payload;
      const result = { ...state, regScreen };
      storeData("onboardingInitialStateFromDisk", result);
      return result;
    }
    case types.SET_REG_ERRORS: {
      let errors = action.payload;
      const result = { ...state, errors };
      storeData("onboardingInitialStateFromDisk", result);
      return result;
    }

    case types.ON_INPUT_REG: {
      let value = dataConstructor(action.payload);
      let newUserData = {
        ...state.newUserData,
        [action.payload.target.name]: value,
      };
      const result = { ...state, newUserData };
      storeData("onboardingInitialStateFromDisk", result);
      return result;
    }

    default:
      return state;
  }
}
