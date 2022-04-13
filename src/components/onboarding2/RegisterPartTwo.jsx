import { genders, errorCodes } from "../../config/formConfig";
import { types } from "../../redux/types/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RegisterPartTwo = () => {
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
      <div>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" className="form-control" />
          <p className="errorMessage">
            {dateOfBirthErrors && errorCodes.dateOfBirth}
          </p>
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select defaultValue="" name="gender" className="form-select">
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
      <div className="row">
        <label>
          Location:
          <div className="col">
            <input
              type="name"
              name="town"
              placeholder="Town"
              className="form-control"
            />
            <p>{townErrors && "Please enter your town"}</p>
          </div>
          <div className="col">
            <input
              type="name"
              name="postCode"
              placeholder="Postcode"
              className="form-control"
            />
            <p className="errorMessage">
              {postCodeErrors && errorCodes.postCode}
            </p>
          </div>
        </label>
      </div>

      <div>
        <label>
          Height:
          <input
            type="number"
            placeholder="in cm"
            name="height"
            id="height"
            className="form-control"
          />
          <p className="errorMessage">{heightErrors && errorCodes.height}</p>
        </label>
      </div>
      <nav>
        <button
          className="btn btn-secondary"
          onClick={() =>
            dispatch({ type: types.SET_REGISTER_SCREEN, payload: 0 })
          }
        >
          Back
        </button>
        {!dateOfBirthErrors &&
          !genderErrors &&
          !townErrors &&
          !postCodeErrors &&
          !heightErrors && (
            <button
              className="btn btn-success"
              style={{ float: "right" }}
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
