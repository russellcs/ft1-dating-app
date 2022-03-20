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
    minHeight: minHeightErrors,
    maxHeight: maxHeightErrors,
  } = props.errors;

  console.log(Date.now());

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
          <p className="errorMessage">
            {relationshipErrors && errorCodes.relationship}
          </p>
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
        <p className="errorMessage">
          {genderPrefErrors && errorCodes.genderPref}
        </p>
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
          <p className="errorMessage">{maxAgeErrors && errorCodes.maxAge}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Minimum height you would like?:
          <input
            type="number"
            name="minHeight"
            placeholder="in cm"
            id="minHeight"
          />
          <p className="errorMessage">
            {minHeightErrors && errorCodes.minHeight}
          </p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Maximum height you would like?:
          <input
            type="number"
            name="maxHeight"
            placeholder="in cm"
            id="maxHeight"
          />
          <p className="errorMessage">
            {maxHeightErrors && errorCodes.maxHeight}
          </p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Religions you would be happy to match with:
          <select name="acceptedReligions" multiple size="5">
            <option>No Preference</option>
            {religionsPref.map((religion, index) => (
              <option key={index} value={index}>
                {religion}
              </option>
            ))}
          </select>
          <p className="errorMessage">{acceptedReligionsErrors}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Maximum distance you would be willing to travel for romance?
          <input type="number" placeholder="in km" name="acceptedDistance" />
          <p className="errorMessage">
            {acceptedDistanceErrors && errorCodes.acceptedDistance}
          </p>
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
            <option value="3">Want kids</option>
          </select>
          <p className="errorMessage">
            {kidsAcceptedErrors && errorCodes.kidsAccepted}
          </p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Do you want to be match with smokers?:
          <select defaultValue="" name="smokersPref">
            <option value="" disabled>
              Select
            </option>
            <option value="0">Yes</option>
            <option value="1">No</option>
          </select>
          <p className="errorMessage">
            {smokersPrefErrors && errorCodes.smokersPref}
          </p>
        </label>
      </div>
      <button onClick={() => props.onSubmit()}>Register Now</button>
    </>
  );
};

export default Preferences;
