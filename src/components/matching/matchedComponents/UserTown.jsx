import { matchedIcons } from "../matchedIcons";

const UserTown = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.location}</span>
      {props.town}
    </>
  );
};

export default UserTown;
