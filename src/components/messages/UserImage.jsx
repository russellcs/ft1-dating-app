import { useSelector } from "react-redux";
import { getIndexById } from "../../utils/general";

const UserImage = (props) => {
  const users = useSelector((state) => state.matching.users);
  const index = getIndexById(props.foreignId, users);
  return (
    <img
      className="w-50 rounded-circle ms-2 shadow-lg"
      // src={users[index].personalDetails.selfie.image}
      alt="user"
    />
  );
};

export default UserImage;
