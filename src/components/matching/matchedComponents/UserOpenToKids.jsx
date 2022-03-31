import { matchedIcons } from "../matchedIcons";
// import { wantKids } from "../../../config/formConfig";

const UserOpenToKids = (props) => {
  const wantKids = [
    "Don't want child",
    "Not sure yet",
    "Open to child",
    "Want child",
  ];
  return (
    <>
      <span className="matchedIcon">{matchedIcons.baby}</span>
      {wantKids[props.openToKids]}
    </>
  );
};

export default UserOpenToKids;
