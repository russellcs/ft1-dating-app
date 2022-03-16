import { useState } from "react";
import Message from "./Message";
import Input from "./Input";
import Block from "./Block";
import Conversation from "./Conversation";

const Messages = (props) => {
	const [draft, setDraft] = useState();

	const [blockClicked, setBlockClicked] = useState(false);

	const onInput = (e) => setDraft(e.target.value);

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			props.addMessage({ content: draft });
		}
	};

	const displayMessage = () => props.addMessage({ content: draft });

	const blockUser = () => {
		setBlockClicked(blockClicked === false ? true : false);
	};

	const name = props.users[0].personalDetails.name.firstName;
	const blockButtonText = blockClicked ? `Unblock ${name}` : `Block ${name}`;

	return (
		<>
			{props.messages.map((message, index) => {
				return (
					<Message
						key={index}
						message={message}
						addMessage={props.addMessage}
					/>
				);
			})}
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
				name={name}
			/>
			<Conversation messages={props.messages} />
		</>
	);
};

export default Messages;
