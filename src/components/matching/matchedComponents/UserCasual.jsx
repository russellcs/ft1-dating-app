import { matchedIcons } from "../matchedIcons";

const UserCasual = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.devilHeart}</span>
      {props.user.preferences.lifeStyle.casual ? " Yes" : " No"}
    </>
  );
};

export default UserCasual;
