import { matchedIcons } from "./matchedIcons";
import { wantKids } from "../../config/formConfig";

const UserOpenToKids = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.baby}</span>
      {wantKids[props.user.preferences.lifeStyle.openToKids]}
    </>
  );
};

export default UserOpenToKids;
