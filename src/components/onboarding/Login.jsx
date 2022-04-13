import { useState } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types/types";
import { callAPI as onboardingCallAPI } from "../../dataController/onboarding";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  // adds input into the state
  const onLoginInput = (e) => {
    const newState = { ...data, [e.target.name]: e.target.value };
    setData(newState);
  };

  // checks if email and password combo exists in users data
  // if true, then sets currentUserId, loggedInStatus and changes the screen
  const loginSubmit = async () => {
    //check if fields are not empty
    if (!data.email || !data.password) {
      toast.error("Please enter email and password");
    } else {
      /// sends email and password checks against database, returns token if successful
      const result = await onboardingCallAPI(types.GET_TOKEN, {
        email: data.email,
        password: data.password,
      });
      // if successful, set token, userId, loggedInStatus to store and change the screen to matches
      if (result.data.status === 1) {
        toast.success("Success, now go find your spark!");
        dispatch({ type: types.SET_TOKEN, payload: result.data.token });
        dispatch({
          type: types.SET_CURRENT_USER_ID,
          payload: result.data.userId,
        });
        dispatch({ type: types.SET_SCREEN, payload: 1 });
        dispatch({ type: types.SET_LOGGED_IN_STATUS, payload: true });
      } else {
        // if email and password combo is wrong then send error
        toast.error("Wrong email and password");
      }
    }
  };

  return (
    <>
      <div className="containerReg">
        <form onInput={onLoginInput} name="registerForm">
          <h1>Please Log In</h1>
          <div className="mb-3">
            <label className="form-label">
              Email Address:
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-control"
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              Password:
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="form-control"
                required
              />
            </label>
          </div>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              loginSubmit();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
