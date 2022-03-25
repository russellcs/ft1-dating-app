import { matchedIcons } from "../matchedIcons";

const UserCasual = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.devilHeart}</span>
      {props.casual ? " Yes" : " No"}
    </>
  );
};

export default UserCasual;
