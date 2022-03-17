import { useState } from "react";
import Block from "./Block";
import Input from "./Input";
import Message from "./Message";

const Conversation = (props) => {
	const [draft, setDraft] = useState();
	const [blockClicked, setBlockClicked] = useState(false);

	// Calls the function on Send button
	const onMessageClick = () => onMessageSave();

	const blockButtonText = blockClicked ? `Unblock user` : `Block user`;

	const onInput = (e) => setDraft(e.target.value);
	// Calls the addMessage function from App.js
	const onMessageSave = () => {
		props.addMessage({
			content: draft,
			toUserId: props.conversation[0],
			fromUserId: props.conversation[1][0].fromUserId,
		});
	};
	// Allows the user to use the Enter key as well as clicking Send
	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			onMessageSave();
		}
	};

	// Toggles the Block button as well as calling the blockUserId function from App.js
	const blockUser = () => {
		setBlockClicked(blockClicked === false ? true : false);
		props.blockUserId();
	};

	return (
		<>
			<p>User ID is {props.conversation[0]}</p>
			<Block
				blockUser={blockUser}
				blockButtonText={blockButtonText}
				blockClicked={blockClicked}
				users={props.users}
			/>
			{props.conversation[1].map((message) => {
				return <Message message={message} />;
			})}
			<Input
				onInput={onInput}
				onKeyDown={onKeyDown}
				onMessageClick={onMessageClick}
			/>
		</>
	);
};

export default Conversation;
