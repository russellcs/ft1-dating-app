import { useState } from "react";
import Joi from "joi";
import { schema, joiDataReorder } from "../../config/formConfig";
import "../Onboarding/register.css";
import { useSelector } from "react-redux";
import { getIndexByEmailAndPassword } from "../../utils/matching";

const Login = (props) => {
  console.log("HELLO")
  const users = useSelector((state) => state.matching.users);
  const [loginErrors, setLoginErrors] = useState({});
  const [data, setData] = useState({});

  const onLoginInput = (e) => {
    const newState = { ...data, [e.target.name]: e.target.value };
    setData(newState);
    // onValidate(newState);
  };

  // const onValidate = async (data) => {
  //   const _joiInstance = Joi.object(schema);
  //   try {
  //     await _joiInstance.validateAsync(data);
  //     setLoginErrors({ errors: "" });
  //   } catch (errors) {
  //     setLoginErrors({ errors: joiDataReorder(errors.details) });
  //   }
  // };

  const onSubmit = () => {
    const currentUserIndex = getIndexByEmailAndPassword(
      data.email,
      data.password,
      users
    );
    // if currentUserIndex is true and users.[currentUserIndex] === data.password >> set loggedin status and set currentUserId
    props.setLoggedStatus(true);
  };

  console.log(data);

  return (
    <>
      <div className="containerReg">
        <form onInput={onLoginInput} onSubmit={onSubmit} name="registerForm">
          <h1>Please Log In</h1>
          <div className="formRow">
            <label>
              Email Address:
              <input type="email" placeholder="Email" name="email" />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </label>
          </div>
          <button>Log in</button>
        </form>
      </div>
      <input className="submit" type="submit" value="Sign In"></input>
    </>
  );
};

export default Login;
