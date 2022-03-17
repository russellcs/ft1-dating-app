import { useState } from "react";
import Joi from "joi";
import { schema, joiDataReorder } from "../../config/formConfig";
import "../Onboarding/register.css";

const Login = (props) => {
  const [loginErrors, setLoginErrors] = useState({});
  const [data, setData] = useState({});

  const onLoginInput = (e) => {
    const newState = { ...data, [e.target.name]: e.target.value };
    setData(newState);
    onValidate(newState);
  };

  const onValidate = async (data) => {
    const _joiInstance = Joi.object(schema);
    try {
      await _joiInstance.validateAsync(data);
      setLoginErrors({ errors: "" });
    } catch (errors) {
      setLoginErrors({ errors: joiDataReorder(errors.details) });
    }
  };

  const onSubmit = () => {
    props.setLoggedStatus(true);
  };

  console.log(loginErrors);

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
                placeholder="Password (8 characters minimum)"
                name="password"
                minLength="8"
                required
              />
            </label>
          </div>
        </form>
      </div>
      <input className="submit" type="submit" value="Sign In"></input>
    </>
  );
};

export default Login;
