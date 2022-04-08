import { useDispatch } from "react-redux";
import { types } from "../../redux/types/types";
import { API_URL } from "../../config/general";
import { callAPI } from "../../dataController";
import axios from "axios";

const Block = (props) => {
	const dispatch = useDispatch();
	console.log(props);

	return (
		<div className="m-4">
			<button
				className="btn btn-danger btn-sm shadow"
				onClick={() => {
					callAPI("BLOCK_USER", props);
					dispatch({ type: types.BLOCK_USER, payload: props });
				}}
			>
				Block user
			</button>
		</div>
	);
};

export default Block;
