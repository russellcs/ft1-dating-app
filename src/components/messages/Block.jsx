import { useDispatch } from "react-redux";
import { types } from "../../redux/types";

const Block = (props) => {
	const dispatch = useDispatch();

	const { userId } = props;

	return (
		<div style={{ margin: "20px" }}>
			<button
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
