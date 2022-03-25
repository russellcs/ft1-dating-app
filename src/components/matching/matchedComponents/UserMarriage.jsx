import { matchedIcons } from "../matchedIcons";

const UserCasual = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.rings}</span>
      {props.marriage ? " Yes" : " No"}
    </>
  );
};

export default UserCasual;
