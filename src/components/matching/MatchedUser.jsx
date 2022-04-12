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
import UserTown from "./matchedComponents/UserTown";
import { getAge } from "../../utils/general";

const MatchedUser = (props) => {
  const { user } = props;
  return (
    <div>
      <UserName name={user.personalDetails.name.firstName} />
      {user.personalDetails.selfie && (
        <UserImage image={user.personalDetails.selfie.image} />
        // <UserImage image={`http://findsparks.uk/userImages/${user.userId}.jpg`} />
        
      )}
      <ul className="userDetails">
        <li>
          <UserGender gender={user.personalDetails.gender} />
        </li>
        <li>
          <UserTown town={user.personalDetails.location.town} />
        </li>
        <li>
          <UserAge age={getAge(user.personalDetails.dob)} />
        </li>
        <li>
          <UserHeight height={user.personalDetails.height} />
        </li>
        <li>
          <UserMarriage marriage={user.preferences.lifeStyle.marriage} />
        </li>
        <li>
          <UserCasual casual={user.preferences.lifeStyle.casual} />
        </li>

        <li>
          <UserChildren haveKids={user.personalDetails.kids} />
        </li>

        <li>
          <UserOpenToKids openToKids={user.preferences.lifeStyle.openToKids} />
        </li>
        {user.personalDetails.religion ? (
          <li className="truncate">
            <UserReligion religion={user.personalDetails.religion} />
          </li>
        ) : null}
        {user.personalDetails.smokers ? (
          <li>
            <UserSmokes smoker={user.personalDetails.smokers} />
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default MatchedUser;
