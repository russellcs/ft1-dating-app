import {
  // religionsPref,
  gendersPref,
  errorCodes,
} from "../../config/formConfig";
import { types } from "../../redux/types/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Preferences = (props) => {
  const errors = useSelector((state) => state.onboarding.errors);
  const dispatch = useDispatch();
  const {
    relationship: relationshipErrors,
    genderPref: genderPrefErrors,
    minAge: minAgeErrors,
    maxAge: maxAgeErrors,
    acceptedDistance: acceptedDistanceErrors,
    kidsAccepted: kidsAcceptedErrors,
    smokersPref: smokersPrefErrors,
    minHeight: minHeightErrors,
    maxHeight: maxHeightErrors,
  } = errors;

  return (
    <>
      <h1>What are you looking for?</h1>
      <div className="row">
        <label>
          Type of relationship you are looking for?:
          <select defaultValue="" name="relationship" className="form-select">
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
      <div>
        <label>Gender: (select all that apply)</label>
        <select name="genderPref" multiple size="6" className="form-select">
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
      <div>
        <label>
          Minimum age you would consider?
          <input
            type="number"
            placeholder="Minimum age"
            name="minAge"
            className="form-control"
          />
          <p className="errorMessage">{minAgeErrors && errorCodes.minAge}</p>
        </label>
      </div>
      <div>
        <label>
          Maximum age you would consider?
          <input
            type="number"
            placeholder="Maximum age"
            name="maxAge"
            className="form-control"
          />
          <p className="errorMessage">{maxAgeErrors && errorCodes.maxAge}</p>
        </label>
      </div>
      <div>
        <label>
          Minimum height you would like?:
          <input
            type="number"
            name="minHeight"
            placeholder="in cm"
            id="minHeight"
            className="form-control"
          />
          <p className="errorMessage">
            {minHeightErrors && errorCodes.minHeight}
          </p>
        </label>
      </div>
      <div>
        <label>
          Maximum height you would like?:
          <input
            type="number"
            name="maxHeight"
            placeholder="in cm"
            id="maxHeight"
            className="form-control"
          />
          <p className="errorMessage">
            {maxHeightErrors && errorCodes.maxHeight}
          </p>
        </label>
      </div>
      <div>
        <label>
          Maximum distance you would be willing to travel for romance?
          <input
            type="number"
            placeholder="in km"
            name="acceptedDistance"
            className="form-control"
          />
          <p className="errorMessage">
            {acceptedDistanceErrors && errorCodes.acceptedDistance}
          </p>
        </label>
      </div>
      <div>
        <label>
          Would you consider matches that have kids?:
          <select defaultValue="" name="kidsAccepted" className="form-select">
            <option value="" disabled>
              Select
            </option>
            <option value="0">Not sure</option>
            <option value="1">Don't want to be match with kids</option>
            <option value="2">Open to matches with kids</option>
          </select>
          <p className="errorMessage">
            {kidsAcceptedErrors && errorCodes.kidsAccepted}
          </p>
        </label>
      </div>
      <div>
        <label>
          Do you want to be match with smokers?:
          <select defaultValue="" name="smokersPref" className="form-select">
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
      <nav>
        <button
          className="btn btn-secondary"
          onClick={() =>
            dispatch({ type: types.SET_REGISTER_SCREEN, payload: 2 })
          }
        >
          Back
        </button>
        {!relationshipErrors &&
          !genderPrefErrors &&
          !minAgeErrors &&
          !maxAgeErrors &&
          !acceptedDistanceErrors &&
          !kidsAcceptedErrors &&
          !smokersPrefErrors &&
          !minHeightErrors &&
          !maxHeightErrors && (
            <button
              className="btn btn-success"
              style={{ float: "right" }}
              onClick={() =>
                dispatch({ type: types.SET_REGISTER_SCREEN, payload: 4 })
              }
            >
              Next
            </button>
          )}
      </nav>
    </>
  );
};

export default Preferences;
