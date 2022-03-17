import { religionsPref, gendersPref } from "../../config/formConfig";

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
  } = props.errors;

  console.log(props.errors);
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
            <option value="0">Marriage</option>
            <option value="1">Casual</option>
            <option value="2">Open to both</option>
          </select>
          <p>
            {relationshipErrors &&
              "Please select what type of relationship you are looking for"}
          </p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Gender:
          <select name="genderPref" multiple size="6">
            {gendersPref.map((gender, index) => (
              <option key={index} value={index}>
                {gender}
              </option>
            ))}
          </select>
          <p>{genderPrefErrors && "Please select your gender preference"}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Minimum age you would consider?
          <input type="number" placeholder="Minimum age" name="minAge" />
          <p>
            {minAgeErrors &&
              "Please enter a valid minimum age you would consider"}
          </p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Maximum age you would consider?
          <input type="number" placeholder="Maximum age" name="maxAge" />
          <p>
            {maxAgeErrors &&
              "Please enter a valid maximum age you would consider"}
          </p>
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
          <input type="number" placeholder="in miles" name="acceptedDistance" />
          <p>{acceptedDistanceErrors}</p>
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
          <p>{kidsAcceptedErrors}</p>
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
          <p>{smokersPrefErrors}</p>
        </label>
      </div>
      <input className="submit" type="submit" value="Register"></input>
    </>
  );
};

export default Preferences;
