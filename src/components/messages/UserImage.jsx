import { useSelector } from "react-redux";
import { getIndexById } from "../../utils/general";
import { API_URL } from "../../config/general";

const UserImage = (props) => {
	const users = useSelector((state) => state.matching.users);
	const index = getIndexById(props.foreignId, users);
	return (
		<img
			className="w-50 rounded-circle ms-2 shadow-lg"
			src={`${API_URL}/userImages/${props.foreignId}.jpg`}
			alt="depiction of user"
		/>
	);
};

export default UserImage;
