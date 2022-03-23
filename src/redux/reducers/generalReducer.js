import { initialState } from "../initialState";
import { types } from "../types";

export function generalReducer(state = initialState, action) {
	switch (action.type) {
		case types.SET_USER_INPUT:
			return { ...state, userInput: action.payload };

		default:
			return state;
	}
}
