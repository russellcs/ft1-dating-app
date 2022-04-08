import { useDispatch } from "react-redux";
import { types } from "../../redux/types/types";
import { callAPI } from "../../dataController/messages";

const Block = (props) => {
	const dispatch = useDispatch();

	return (
		<div className="m-4">
			<button
				className="btn btn-danger btn-sm shadow"
				onClick={() => {
					callAPI(types.BLOCK_USER, props);
					dispatch({ type: types.BLOCK_USER, payload: props });
				}}
			>
				Block user
			</button>
		</div>
	);
};

export default Block;
