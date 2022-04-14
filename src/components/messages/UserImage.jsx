import { API_URL } from "../../config/general";
import "./messages.scss";

const UserImage = (props) => {
  return (
      <div
        className="profilePicture"
        style={{ backgroundImage: `url(${API_URL}/userImages/${props.foreignId}.jpg)` }}
      ></div>
  );
};

export default UserImage;
