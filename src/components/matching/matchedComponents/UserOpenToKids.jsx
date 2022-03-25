import { matchedIcons } from "../matchedIcons";
import { wantKids } from "../../../config/formConfig";

const UserOpenToKids = (props) => {
  console.log(props.openToKids);
  return (
    <>
      <span className="matchedIcon">{matchedIcons.baby}</span>
      {wantKids[props.openToKids]}
    </>
  );
};

export default UserOpenToKids;
