import { users, currentUserId } from "./mock";
import { messages2 } from "./mock/messages-info";
import Interface from "./components/Interface";
import { useState } from "react";

const App = () => {
	const [messages, setMessages] = useState(messages2);
	// Adds the current user ID to the blocked array in the data
	const blockUserId = () => {
		users[0].blocked.push(currentUserId);
	};
	// Creates a copy of the data and sets new data to the state
	const addMessage = (payload) => {
		const copy = [...messages2];
		copy.push(payload);
		setMessages(copy);
	};

	return (
		<>
			<Interface
				users={users}
				messages={messages}
				addMessage={addMessage}
				blockUserId={blockUserId}
			/>
		</>
	);
};

export default App;
