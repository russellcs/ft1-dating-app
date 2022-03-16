import { matchedIcons } from "../matchedIcons";
import { getAge } from "../../../utils/matchingUtil";

const UserAge = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.cake}</span>{" "}
      {getAge(props.user)}
    </>
  );
};

export default UserAge;
