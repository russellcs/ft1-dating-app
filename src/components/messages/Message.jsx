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
		<div style={{ width: "80%" }} className="m-4">
			<p className="bg-white py-1 px-3 rounded shadow-sm">{message.content}</p>
			<div className="position-relative d-flex">
				<button
					className="btn btn-sm btn-outline-dark me-3"
					onClick={isLikeClicked}
				>
					&#9829;
				</button>
				{likeClicked && <p className="mb-0">Message liked</p>}

				<button
					className="btn btn-sm btn-dark position-absolute top-0 end-0 shadow"
					onClick={() => {
						dispatch({
							type: types.DELETE_MESSAGE,
							payload: message.messageId,
						});
					}}
				>
					Delete message
				</button>
			</div>
		</div>
	);
};

export default Message;
