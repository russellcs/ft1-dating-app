import {
  religionsPref,
  gendersPref,
  errorCodes,
} from "../../config/formConfig";

const Preferences = (props) => {
  const {
    relationship: relationshipErrors,
    genderPref: genderPrefErrors,
    minAge: minAgeErrors,
    maxAge: maxAgeErrors,
    acceptedReligions: acceptedReligionsErrors,
    acceptedDistance: acceptedDistanceErrors,
    kidsAccepted: kidsAcceptedErrors,
    smokersPref: smokersPrefErrors,
    minimumHeight: minimumHeightErrors,
    maximumHeight: maximumHeightErrors,
  } = props.errors;

  return (
    <>
      <h1>What are you looking for?</h1>
      <div className="formRow">
        <label>
          Type of relationship you are looking for?:
          <select defaultValue="" name="relationship">
            <option value="" disabled>
              Select
            </option>
            <option value="0">Serious</option>
            <option value="1">Casual</option>
            <option value="2">Open to both</option>
          </select>
          <p>{relationshipErrors && errorCodes.relationship}</p>
        </label>
      </div>
      <div className="formRow">
        <label>Gender:</label>
        <select name="genderPref" multiple size="6">
          {gendersPref.map((gender, index) => (
            <option key={index} value={index}>
              {gender}
            </option>
          ))}
        </select>
        <p>{genderPrefErrors && errorCodes.genderPref}</p>
      </div>
      <div className="formRow">
        <label>
          Minimum age you would consider?
          <input type="number" placeholder="Minimum age" name="minAge" />
          <p>{minAgeErrors && errorCodes.minAge}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Maximum age you would consider?
          <input type="number" placeholder="Maximum age" name="maxAge" />
          <p>{maxAgeErrors && errorCodes.maxAge}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Minimum height you would like?:
          <input
            type="number"
            name="minimumHeight"
            placeholder="in cm"
            id="minimumHeight"
          />
          <p>{minimumHeightErrors && errorCodes.minHeight}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Maximum height you would like?:
          <input
            type="number"
            name="maximumHeight"
            placeholder="in cm"
            id="maximumHeight"
          />
          <p>{maximumHeightErrors && errorCodes.maximumHeight}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Religion:
          <select name="acceptedReligions" multiple size="5">
            {religionsPref.map((religion, index) => (
              <option key={index} value={index}>
                {religion}
              </option>
            ))}
          </select>
          <p>{acceptedReligionsErrors}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Maximum distance you would be willing to travel for romance?
          <input type="number" placeholder="in km" name="acceptedDistance" />
          <p>{acceptedDistanceErrors && errorCodes.acceptedDistance}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Would you consider matches that have kids?:
          <select defaultValue="" name="kidsAccepted">
            <option value="" disabled>
              Select
            </option>
            <option value="0">Not saying</option>
            <option value="1">Not sure</option>
            <option value="2">Open to kids</option>
            <option value="2">Want kids</option>
          </select>
          <p>{kidsAcceptedErrors && errorCodes.kidsAccepted}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Do you want to be match with smokers?:
          <select defaultValue="" name="smokersPref">
            <option value="" disabled>
              Select
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <p>{smokersPrefErrors && errorCodes.smokersPref}</p>
        </label>
      </div>
      <input className="submit" type="submit" value="Register"></input>
    </>
  );
};

export default Preferences;
