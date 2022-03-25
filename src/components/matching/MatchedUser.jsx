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
import { getAge } from "../../utils/matching";

const MatchedUser = (props) => {
  const { user } = props;
  return (
    <>
      <UserName name={user.personalDetails.name.firstName} />
      {user.personalDetails.selfie && (
        <UserImage image={user.personalDetails.selfie.image} />
      )}
      <ul className="userDetails">
        <li>
          <UserAge age={getAge(user.personalDetails.dob)} />
        </li>
        {user.personalDetails.gender ? (
          <li>
            <UserGender gender={user.personalDetails.gender} />
          </li>
        ) : null}
        <li>
          <UserHeight height={user.personalDetails.height} />
        </li>
        {user.preferences.lifeStyle.marriage === undefined ? null : (
          <li>
            <UserMarriage marriage={user.preferences.lifeStyle.marriage} />
          </li>
        )}
        {user.preferences.lifeStyle.casual === undefined ? null : (
          <li>
            <UserCasual casual={user.preferences.lifeStyle.casual} />
          </li>
        )}
        {user.preferences.lifeStyle.openToKids ? (
          <li>
            <UserOpenToKids
              openToKids={user.preferences.lifeStyle.openToKids}
            />
          </li>
        ) : null}
        {user.personalDetails.religion ? (
          <li>
            <UserReligion religion={user.personalDetails.religion} />
          </li>
        ) : null}
        {user.personalDetails.kids === undefined ? null : (
          <li>
            <UserChildren haveKids={user.personalDetails.kids} />
          </li>
        )}
        {user.personalDetails.smokers === undefined ? null : (
          <li>
            <UserSmokes smoker={user.personalDetails.smokers} />
          </li>
        )}
      </ul>
    </>
  );
};

export default MatchedUser;
