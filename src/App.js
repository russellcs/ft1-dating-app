import { users, messages as mockMessages } from "./mock";
import Interface from "./components/Interface";
import { useState } from "react";

const App = () => {

	const [messages, setMessages] = useState(mockMessages);
	const addMessage = (payload) => {
		const copy = [...messages];
		console.log(copy);
		copy.push(payload);
		setMessages(copy);
	};
	return (
		<>
			<Interface users={users} messages={messages} addMessage={addMessage} />
		</>
	);

};

export default App;
