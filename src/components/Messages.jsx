import { useState } from "react";

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

	const blockButtonText = blockClicked ? "Unblock user" : "Block user";

	return (
		<>
			<div className="message">
				{message}
				{message && <button onClick={isLikeClicked}>&#9829;</button>}
				{likeClicked && <p>Message liked</p>}
			</div>

			<input onInput={onInput} onKeyDown={onKeyDown} type="text" />

			<button onClick={displayMessage}>Send</button>
			<br />
			{/* <button>Block {props.users.personalDetails.name.firstName}</button> */}
			<button onClick={blockUser}>{blockButtonText}</button>
		</>
	);
};

export default Messages;
