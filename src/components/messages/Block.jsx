import { useDispatch } from "react-redux";
import { types } from "../../redux/types";

const Block = (props) => {
	const dispatch = useDispatch();

	const { userId } = props;

	return (
		<div className="m-4">
			<button
				className="btn btn-danger btn-sm"
				onClick={() => {
					dispatch({ type: types.BLOCK_USER, payload: userId });
				}}
			>
				Block user
			</button>
		</div>
	);
};

export default Block;
