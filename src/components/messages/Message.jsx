import { useState } from "react";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";

const Message = (props) => {
	const dispatch = useDispatch();

	const [likeClicked, setLikeClicked] = useState(false);
	const { message } = props;

	// Toggles the Like button
	const isLikeClicked = () => {
		setLikeClicked(likeClicked === false ? true : false);
	};

	return (
		<div style={{ margin: "20px" }}>
			{message.content}
			<button onClick={isLikeClicked}>&#9829;</button>
			{likeClicked && <p>Message liked</p>}
			<button
				onClick={() => {
					dispatch({
						type: types.DELETE_MESSAGE,
						payload: message.messageId,
					});
				}}
				style={{ display: "block" }}
			>
				Delete message
			</button>
		</div>
	);
};

export default Message;
