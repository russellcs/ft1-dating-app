import { genders, errorCodes } from "../../config/formConfig";
import { types } from "../../redux/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RegisterPartTwo = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.onboarding.errors);
  const {
    dateOfBirth: dateOfBirthErrors,
    gender: genderErrors,
    town: townErrors,
    postCode: postCodeErrors,
    height: heightErrors,
  } = errors;

  return (
    <>
      <h1>Please enter your details</h1>
      <div className="formRow">
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" />
          <p className="errorMessage">
            {dateOfBirthErrors && errorCodes.dateOfBirth}
          </p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Gender:
          <select defaultValue="" name="gender">
            <option value="" disabled>
              Select
            </option>
            {genders.map((gender, index) => (
              <option key={index} value={index}>
                {gender}
              </option>
            ))}
          </select>
          <p className="errorMessage">{genderErrors && errorCodes.gender}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Location:
          <input type="name" name="town" placeholder="Town" />
          <input type="name" name="postCode" placeholder="Postcode" />
        </label>
        <p>{townErrors && "Please enter your town"}</p>
        <p className="errorMessage">{postCodeErrors && errorCodes.postCode}</p>
      </div>
      <div className="formRow">
        <label>
          Height:
          <input type="number" placeholder="in cm" name="height" id="height" />
          <p className="errorMessage">{heightErrors && errorCodes.height}</p>
        </label>
      </div>
      <nav>
        <button
          onClick={() =>
            dispatch({ type: types.SET_REGISTER_SCREEN, payload: 0 })
          }
        >
          Back
        </button>
        {dateOfBirthErrors === undefined &&
          genderErrors === undefined &&
          townErrors === undefined &&
          postCodeErrors === undefined &&
          heightErrors === undefined && (
            <button
              className="nextButton"
              onClick={() =>
                dispatch({ type: types.SET_REGISTER_SCREEN, payload: 2 })
              }
            >
              Next
            </button>
          )}
      </nav>
    </>
  );
};

export default RegisterPartTwo;
