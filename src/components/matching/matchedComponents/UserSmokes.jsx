import { matchedIcons } from "../matchedIcons";
import { smokes } from "../../../config/formConfig";

const UserSmokes = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.smoking}</span>
      {smokes[props.smoker]}
    </>
  );
};

export default UserSmokes;
