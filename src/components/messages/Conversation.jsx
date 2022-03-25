import { useState } from "react";
import { getUniqueId } from "../../utils/general";
import Block from "./Block";
import Input from "./Input";
import Message from "./Message";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";
import { useSelector } from "react-redux";

const Conversation = (props) => {
	const users = useSelector((state) => state.matching.users);
	const [draft, setDraft] = useState();
	const [blockClicked, setBlockClicked] = useState(false);
	const dispatch = useDispatch();

	// Calls the function on Send button
	const onMessageClick = () => onMessageSave();

	const onInput = (e) => setDraft(e.target.value);
	// Calls the addMessage function from App.js
	const onMessageSave = () => {
		dispatch({
			type: types.ADD_MESSAGE,
			payload: {
				content: draft,
				foreignId: Number(props.conversation[0]), //Number(conversation[1][0]).fromUserId,
				messageId: getUniqueId(16),
			},
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
		console.log("block clicked");
		setBlockClicked(blockClicked === false ? true : false);
		props.blockUserId(
			props.conversation[0],
			props.conversation[1][0].fromUserId
		);
	};

	return (
		<div
			style={{
				border: "solid 1px black",
				margin: "10px",
				padding: "10px",
				width: "280px",
			}}
		>
			<p>User ID is {props.conversation[0]}</p>
			<Block
				blockUser={blockUser}
				// blockButtonText={blockButtonText}
				blockClicked={blockClicked}
				users={props.users}
				userId={props.conversation[0]}
			/>
			{props.conversation[1].map((message, index) => {
				return (
					message.content && (
						<Message
							message={message}
							deleteMessage={props.deleteMessage}
							key={index}
						/>
					)
				);
			})}
			<Input
				onInput={onInput}
				onKeyDown={onKeyDown}
				onMessageClick={onMessageClick}
			/>
		</div>
	);
};

export default Conversation;
