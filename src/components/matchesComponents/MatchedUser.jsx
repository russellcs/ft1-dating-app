import UserSmokes from "./matchedComponents/UserSmokes";
import UserChildren from "./matchedComponents/UserChildren";
import UserReligion from "./matchedComponents/UserReligion";
import UserOpenToKids from "./matchedComponents/UserOpenToKids";
import UserMarriage from "./matchedComponents/UserMarriage";
import UserCasual from "./matchedComponents/UserCasual";
import UserHeight from "./matchedComponents/UserHeight";
import UserGender from "./matchedComponents/UserGender";
import UserAge from "./matchedComponents/UserAge";
import UserImage from "./matchedComponents/UserImage";
import UserName from "./matchedComponents/UserName";

const MatchedUser = (props) => {
  const { user } = props;
  return (
    <>
      <UserName user={user} />
      <UserImage user={user} />
      <ul className="userDetails">
        <li>
          {" "}
          <UserAge user={user} />
        </li>
        {user.personalDetails.gender ? (
          <li>
            <UserGender user={user} />
          </li>
        ) : null}
        <li>
          <UserHeight user={user} />
        </li>
        {user.preferences.lifeStyle.marriage === undefined ? null : (
          <li>
            <UserMarriage user={user} />
          </li>
        )}
        {user.preferences.lifeStyle.casual === undefined ? null : (
          <li>
            <UserCasual user={user} />
          </li>
        )}
        {user.preferences.lifeStyle.openToKids ? (
          <li>
            <UserOpenToKids user={user} />
          </li>
        ) : null}
        {user.personalDetails.religion ? (
          <li>
            <UserReligion user={user} />
          </li>
        ) : null}
        {user.personalDetails.kids === undefined ? null : (
          <li>
            <UserChildren user={user} />
          </li>
        )}
        {user.personalDetails.smokers === undefined ? null : (
          <li>
            <UserSmokes user={user} />
          </li>
        )}
      </ul>
    </>
  );
};

//ADD CHAT BUTTON? AND REJECT BUTTON?

export default MatchedUser;
