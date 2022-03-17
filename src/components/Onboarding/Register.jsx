import { useState } from "react";
import { schema, joiDataReorder } from "../../config/formConfig";
import Joi from "joi";
import RegisterPartOne from "./RegisterPartOne";
import RegisterPartTwo from "./RegisterPartTwo";
import RegisterPartThree from "./RegisterPartThree";
import "../Onboarding/register.css";

const Register = (props) => {
  const [newUserData, setNewUserData] = useState({});
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
    const newState = { ...newUserData, [e.target.name]: value };
    setNewUserData(newState);
    onValidate(newState);
  };

  const onValidate = async (data) => {
    const _joiInstance = Joi.object(schema);
    try {
      // await _joiInstance.validateAsync(data);
      await _joiInstance.validateAsync(data, { abortEarly: false });
      setErrors({ errors: "" });
    } catch (errors) {
      setErrors(joiDataReorder(errors.details));
    }
  };

  // console.log(newUserData);
  // console.log(errors);
  return (
    <>
      <div className="containerReg">
        <form
          className="form"
          onInput={onInput}
          onSubmit={onSubmit}
          name="registerForm"
        >
          {regScreen === 0 && (
            <RegisterPartOne
              setRegScreen={setRegScreen}
              errors={errors}
              newUserData={newUserData}
            />
          )}
          {regScreen === 1 && (
            <RegisterPartTwo setRegScreen={setRegScreen} errors={errors} />
          )}
          {regScreen === 2 && (
            <RegisterPartThree setRegScreen={setRegScreen} errors={errors} />
          )}
        </form>
      </div>
    </>
  );
};

export default Register;
