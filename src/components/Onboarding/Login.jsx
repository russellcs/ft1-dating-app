import { useState } from "react";
import "../Onboarding/register.css";
import { useSelector } from "react-redux";
import { getIndexByEmailAndPassword } from "../../utils/matching";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types";

const Login = () => {
  const users = useSelector((state) => state.matching.users);
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const onLoginInput = (e) => {
    const newState = { ...data, [e.target.name]: e.target.value };
    setData(newState);
  };

  const loginSubmit = () => {
    const currentUserIndex = getIndexByEmailAndPassword(
      data.email,
      data.password,
      users
    );
    if (currentUserIndex > -1) {
      dispatch({
        type: types.SET_CURRENT_USER_ID,
        payload: users[currentUserIndex].userId,
      });
      dispatch({ type: types.SET_SCREEN, payload: 1 });
      dispatch({ type: types.SET_LOGGED_IN_STATUS, payload: true });
    } else {
      alert("Invalid email / password");
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
