import UserImage from "./UserImage";
import Block from "./Block";
import Message from "./Message";
import Input from "./Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueId } from "../../utils/generic";
import { getIndexById } from "../../utils/general";
import { types } from "../../redux/types/types";
import { callAPI } from "../../dataController/messages";

const Conversation = (props) => {
	const [draft, setDraft] = useState();
	const dispatch = useDispatch();

	const users = useSelector((state) => state.matching.users);
	const index = getIndexById(Number(props.conversation[0]), users);
	const userId = useSelector((state) => state.general.currentUserId);

	// Calls the function on click of the Send button
	const onMessageClick = () => onMessageSave();

	const onInput = (e) => {
		setDraft(e.target.value);
	};
	// Calls the addMessage function from App.js
	const onMessageSave = () => {
		callAPI(types.ADD_MESSAGE, {
			userId,
			content: draft,
			foreignId: Number(props.conversation[0]),
		});
		dispatch({
			type: types.ADD_MESSAGE,
			payload: {
				content: draft,
				foreignId: Number(props.conversation[0]),
				messageId: getUniqueId(16),
			},
		});
		setDraft("");
	};
	// Allows the user to use the Enter key as well as clicking Send
	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			onMessageSave();
		}
	};

	return (
		<div
			className="card container-sm mt-4 pb-2 shadow"
			style={{ backgroundColor: "#dae9f6" }}
		>
			<div className="d-flex justify-content-between mt-4 mb-1 ms-3 me-5">
				<UserImage foreignId={Number(props.conversation[0])} />
				<h3 className="mx-auto mt-4 me-4">
					{users[index].personalDetails.name.firstName}
				</h3>
			</div>
			<Block foreignId={props.conversation[0]} userId={userId} />

			{props.conversation[1].map((message, index) => {
				return message.content && <Message message={message} key={index} />;
			})}

			<Input
				onInput={onInput}
				onKeyDown={onKeyDown}
				onMessageClick={onMessageClick}
				draft={draft}
			/>
		</div>
	);
};

export default Conversation;
