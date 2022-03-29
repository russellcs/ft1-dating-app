import { getMessageIndexById } from "./matching";

import { messagingInitialState } from "../redux/messagingInitialState";

test("fetch the index of a message", () => {
	expect(getMessageIndexById(1, messagingInitialState.messages)).toBe(0);
});
