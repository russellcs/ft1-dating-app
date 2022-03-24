import { errorCodes } from "../../config/formConfig";
import { types } from "../../redux/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RegisterPartOne = (props) => {
  const newUserData = useSelector((state) => state.onboarding.newUserData);
  const errors = useSelector((state) => state.onboarding.errors);
  const dispatch = useDispatch();
  const {
    email: emailErrors,
    password: passwordErrors,
    firstName: firstNameErrors,
    lastName: lastNameErrors,
  } = errors;

  return (
    <>
      <div>
        <h1>Registration form</h1>
        <div className="formRow">
          <label>
            Email Address:
            <input type="email" placeholder="Email" name="email" />
            <p className="errorMessage">{emailErrors && errorCodes.email}</p>
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              placeholder="Password (8 characters minimum)"
              name="password"
              minLength="8"
              required
            />
            <p className="errorMessage">{passwordErrors} </p>
          </label>
        </div>
        <div className="formRow">
          <label>
            First Name:
            <input type="name" placeholder="First Name" name="firstName" />
          </label>
          <p className="errorMessage">
            {firstNameErrors && errorCodes.firstName}
          </p>
        </div>
        <div className="formRow">
          <label>
            Last Name:
            <input type="name" placeholder="Last Name" name="lastName" />
          </label>
          <p className="errorMessage">
            {lastNameErrors && errorCodes.lastName}
          </p>
        </div>
        <nav>
          {Object.keys(newUserData).length > 1 &&
            emailErrors === undefined &&
            passwordErrors === undefined &&
            firstNameErrors === undefined && (
              <button
                className="nextButton"
                onClick={() =>
                  dispatch({ type: types.SET_REGISTER_SCREEN, payload: 1 })
                }
              >
                Next
              </button>
            )}
        </nav>
      </div>
    </>
  );
};

export default RegisterPartOne;
