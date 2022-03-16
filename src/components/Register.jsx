import { useState } from "react";
import { schema, joiDataReorder } from "../config/formConfig";
import "./Onboarding/register.css";
import Joi from "joi";
import RegisterPartOne from "./Onboarding/RegisterPartOne";
import RegisterPartTwo from "./Onboarding/RegisterPartTwo";
import RegisterPartThree from "./Onboarding/RegisterPartThree";

const Register = (props) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [regScreen, setRegScreen] = useState(0);

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
          {regScreen === 0 && <RegisterPartOne setRegScreen={setRegScreen} />}
          {regScreen === 1 && <RegisterPartTwo setRegScreen={setRegScreen} />}
          {regScreen === 2 && <RegisterPartThree setRegScreen={setRegScreen} />}


        </form>
      </div>
    </>
  );
};

export default Register;
