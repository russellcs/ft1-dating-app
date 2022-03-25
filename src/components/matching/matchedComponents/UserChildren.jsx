import { matchedIcons } from "../matchedIcons";

const UserChildren = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.child}</span>
      {props.haveKids ? " Have children" : "Don't have children"}
    </>
  );
};

export default UserChildren;
