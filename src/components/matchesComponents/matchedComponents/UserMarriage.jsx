import { matchedIcons } from "../matchedIcons";

const UserCasual = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.rings}</span>
      {props.user.preferences.lifeStyle.marriage ? " Yes" : " No"}
    </>
  );
};

export default UserCasual;
