import { initialState } from "../initialState";
import { SET_USER_INPUT } from "../types";

export function generalReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER_INPUT:
			return { ...state, userInput: action.payload };

		default:
			return state;
	}
}
