import { matchedIcons } from "./matchedIcons";
import { smokes } from "../../config/formConfig";

const UserSmokes = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.smoking}</span>
      {smokes[props.user.personalDetails.smokers]}
    </>
  );
};

export default UserSmokes;
