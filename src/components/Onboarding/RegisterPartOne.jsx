import { errorCodes } from "../../config/formConfig";
import { types } from "../../redux/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RegisterPartOne = () => {
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
        <div className="form-group">
          <label>
            Email Address:
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control"
            />
          </label>
        </div>
        <p className="errorMessage1">{emailErrors && errorCodes.email}</p>
        <div className="form-group">
          <label>
            Password:
            <input
              type="password"
              placeholder="(4 characters minimum)"
              name="password"
              minLength="8"
              className="form-control"
              required
            />
          </label>
        </div>
        <p className="errorMessage1">{passwordErrors} </p>
        <div className="form-group">
          <label>
            First Name:
            <input
              type="name"
              placeholder="First Name"
              name="firstName"
              className="form-control"
            />
          </label>
        </div>
        <p className="errorMessage1">
          {firstNameErrors && errorCodes.firstName}
        </p>
        <div className="form-group">
          <label>
            Last Name:
            <input
              type="name"
              placeholder="Last Name"
              name="lastName"
              className="form-control"
            />
          </label>
        </div>
        <p className="errorMessage1">{lastNameErrors && errorCodes.lastName}</p>
        <nav>
          {Object.keys(newUserData).length > 1 &&
            emailErrors === undefined &&
            passwordErrors === undefined &&
            firstNameErrors === undefined && (
              <button
                className="btn btn-success"
                style={{ float: "right" }}
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
