import {
  religions,
  wantKids,
  smokes,
  errorCodes,
} from "../../config/formConfig";
import { types } from "../../redux/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RegisterPartThree = () => {
  const errors = useSelector((state) => state.onboarding.errors);
  const dispatch = useDispatch();
  const {
    smokes: smokesErrors,
    haveKids: haveKidsErrors,
    wantKids: wantKidsErrors,
    religion: religionErrors,
  } = errors;

  return (
    <>
      <h1>a few more details...</h1>
      <div>
        <label>
          Do you smoke?:
          <select defaultValue="" name="smokes" className="form-select">
            <option value="" disabled>
              Select
            </option>
            {smokes.map((smokes, index) => (
              <option key={index} value={index}>
                {smokes}
              </option>
            ))}
          </select>
          <p className="errorMessage">{smokesErrors && errorCodes.smokes}</p>
        </label>
      </div>
      <div>
        <label>
          Do you have any kids?:
          <select defaultValue="" name="haveKids" className="form-select">
            <option value="" disabled>
              Select
            </option>
            <option value="0">Prefer not to say</option>
            <option value="1">No</option>
            <option value="2">Yes</option>
          </select>
        </label>
        <p className="errorMessage">{haveKidsErrors && errorCodes.haveKids}</p>
      </div>
      <div>
        <label>
          Do you want kids in the future?
          <select defaultValue="" name="wantKids" className="form-select">
            <option value="" disabled>
              Select
            </option>
            {wantKids.map((kids, index) => (
              <option key={index} value={index}>
                {kids}
              </option>
            ))}
          </select>
          <p className="errorMessage">
            {wantKidsErrors && errorCodes.wantKids}
          </p>
        </label>
      </div>
      <div>
        <label>
          Religion:
          <select defaultValue="" name="religion" className="form-select">
            <option value="" disabled>
              Select
            </option>
            {religions.map((religion, index) => (
              <option key={index} value={index}>
                {religion}
              </option>
            ))}
          </select>
          <p className="errorMessage">
            {religionErrors && errorCodes.religion}
          </p>
        </label>
      </div>
      <nav>
        <button
          className="btn btn-secondary"
          onClick={() =>
            dispatch({ type: types.SET_REGISTER_SCREEN, payload: 1 })
          }
        >
          Back
        </button>
        {smokesErrors === undefined &&
          haveKidsErrors === undefined &&
          wantKidsErrors === undefined &&
          religionErrors === undefined && (
            <button
              className="btn btn-success"
              style={{ float: "right" }}
              onClick={() =>
                dispatch({ type: types.SET_REGISTER_SCREEN, payload: 3 })
              }
            >
              Next
            </button>
          )}
      </nav>
    </>
  );
};

export default RegisterPartThree;
