import { useState } from "react";
import Message from "./Message";
import Input from "./Input";
import Block from "./Block";

const Messages = (props) => {
	const [draft, setDraft] = useState();
	const [message, setMessage] = useState();
	const [likeClicked, setLikeClicked] = useState(false);
	const [blockClicked, setBlockClicked] = useState(false);

	const onInput = (e) => setDraft(e.target.value);

	const displayMessage = () => {
		setMessage(draft);
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			displayMessage();
		}
	};

	const isLikeClicked = () => {
		setLikeClicked(likeClicked === false ? true : false);
	};

	const blockUser = () => {
		setBlockClicked(blockClicked === false ? true : false);
	};

	const blockButtonText = blockClicked ? "Unblock (user)" : "Block (user)";

	return (
		<>
			<Message
				message={message}
				likeClicked={likeClicked}
				isLikeClicked={isLikeClicked}
			/>

			<Input
				onInput={onInput}
				onKeyDown={onKeyDown}
				displayMessage={displayMessage}
			/>

			<Block
				blockUser={blockUser}
				blockButtonText={blockButtonText}
				blockClicked={blockClicked}
				users={props.users}
			/>
		</>
	);
};

export default Messages;
