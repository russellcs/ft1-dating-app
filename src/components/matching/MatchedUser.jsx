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
import { API_URL } from "../../config/general";

const MatchedUser = (props) => {
	const { user } = props;
	const { gender, dob, height, kids, religion, smokers } =
		props.user.personalDetails;
	const { marriage, casual, openToKids } = props.user.preferences.lifeStyle;
	const { firstName } = props.user.personalDetails.name;
	const { town } = props.user.personalDetails.location;

	return (
		<div className="mb-2">
			<UserName name={firstName} />

			<UserImage
				image={`${API_URL}/userImages/${user.userId}.jpg`}
				name={firstName}
			/>

			<ul className="userDetails">
				<li>
					<UserGender gender={gender} />
				</li>
				<li>
					<UserTown town={town} />
				</li>
				<li>
					<UserAge age={getAge(dob)} />
				</li>
				<li>
					<UserHeight height={height} />
				</li>
				<li>
					<UserMarriage marriage={marriage} />
				</li>
				<li>
					<UserCasual casual={casual} />
				</li>

				<li>
					<UserChildren haveKids={kids} />
				</li>

				<li>
					<UserOpenToKids openToKids={openToKids} />
				</li>
				{religion ? (
					<li className="truncate">
						<UserReligion religion={religion} />
					</li>
				) : null}
				{smokers ? (
					<li>
						<UserSmokes smoker={smokers} />
					</li>
				) : null}
			</ul>
		</div>
	);
};

export default MatchedUser;
