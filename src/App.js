import { messages as mockMessages } from "./mock/mockMessages";

import Interface from "./components/Interface";
import { useState } from "react";

import { getUniqueId } from "./utils/general";
import { useDispatch } from "react-redux";
import { types } from "./redux/types";
import { useSelector } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.general.loggedIn);

	const [messages, setMessages] = useState(mockMessages);
	const [userId, setUserId] = useState(getUniqueId(16));

	return (
		<>
			<button
				className="btn btn-primary"
				onClick={() => {
					localStorage.clear();
				}}
			>
				Clear localStorage
			</button>
			{loggedIn === true && (
				<button
					className="btn btn-dark"
					onClick={() => {
						dispatch({ type: types.LOG_OUT });
					}}
				>
					Log Out
				</button>
			)}
			<Interface messages={messages} newUserId={userId} />
		</>
	);
};

export default App;
