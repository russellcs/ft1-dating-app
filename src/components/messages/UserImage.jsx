import { useSelector } from "react-redux";
import { getIndexById } from "../../utils/general";
import { API_URL } from "../../config/general";
import "./messages.scss";

const UserImage = (props) => {
  const users = useSelector((state) => state.matching.users);
  const index = getIndexById(props.foreignId, users);
  return (
    <>
      {/* <img
        className="w-25 rounded-circle ms-2 shadow-lg"
        src={`${API_URL}/userImages/${props.foreignId}.jpg`}
        alt="depiction of user"
      /> */}
      <div
        className="profilePicture"
        style={{ backgroundImage: `url(${API_URL}/userImages/${props.foreignId}.jpg)` }}
      ></div>
    </>
  );
};

export default UserImage;
