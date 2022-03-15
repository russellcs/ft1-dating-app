import { useState } from "react";
import { schema, joiDataReorder } from "../config/formConfig";
import "./Register/register.css";
import Joi from "joi";
import RegisterPartOne from "./Register/RegisterPartOne";
import RegisterPartTwo from "./Register/RegisterPartTwo";
import RegisterPartThree from "./Register/RegisterPartThree";

const Register = (props) => {
  let [data, setData] = useState({});
  let [errors, setErrors] = useState({});

  const onSubmit = () => {
    //will send the data to be added to users
  };

  const onInput = (e) => {
    let value = e.target.value;
    if (e.target.name === "dateOfBirth") {
      value = new Date(e.target.value).getTime();
    }
    const newState = { ...data, [e.target.name]: value };
    setData(newState);
    onValidate(newState);
  };

  const onValidate = async (data) => {
    const _joiInstance = Joi.object(schema);
    try {
      await _joiInstance.validateAsync(data);
      setErrors({ errors: "" });
    } catch (errors) {
      setErrors({ errors: joiDataReorder(errors.details) });
    }
  };

  console.log(data);
  console.log(errors);
  return (
    <>
      <div className="container">
        <form
          className="form"
          onInput={onInput}
          onSubmit={onSubmit}
          name="registerForm"
        >
          <h1>Please enter your details</h1>
          <RegisterPartOne />
          <RegisterPartTwo />
          <RegisterPartThree />
          <input className="submit" type="submit" value="Register"></input>
        </form>
      </div>
    </>
  );
};

export default Register;
