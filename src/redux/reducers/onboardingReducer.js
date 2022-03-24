import { onboardingInitialState } from "../onboardingInitialState";
import { types } from "../types";

export function onboardingReducer(state = onboardingInitialState, action) {
  switch (action.type) {
    case types.SET_ONBOARDING_SCREEN:
      let screen = action.payload;
      return { ...state, screen };

    case types.SET_REGISTER_SCREEN:
      let regScreen = action.payload;
      return { ...state, regScreen };

    case types.ON_INPUT_REG:
      let value = action.payload.target.value;

      if (action.payload.target.name === "genderPref") {
        const genderArray = [];
        for (
          let index = 0;
          index < action.payload.target.selectedOptions.length;
          index++
        ) {
          genderArray.push(
            Number(action.payload.target.selectedOptions[index].value)
          );
        }
        value = genderArray;
      }

      if (action.payload.target.name === "dateOfBirth") {
        value = new Date(action.payload.target.value).getTime();
      }

      if (action.payload.target.name === "relationship" && value === "0") {
        value = { marriage: true, casual: false };
      }

      if (action.payload.target.name === "relationship" && value === "1") {
        value = { marriage: false, casual: true };
      }

      if (action.payload.target.name === "relationship" && value === "2") {
        value = { marriage: true, casual: true };
      }

      if (action.payload.target.name === "smokersPref" && value === "0") {
        value = true;
      }

      if (action.payload.target.name === "smokersPref" && value === "1") {
        value = false;
      }

      let newUserData = {
        ...state.newUserData,
        [action.payload.target.name]: value,
      };

      return { ...state, newUserData };
    default:
      return state;
  }
}
