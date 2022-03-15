import { useState } from "react";
import {
  religions,
  wantKids,
  smokes,
  genders,
  schema,
  joiDataReorder,
} from "../config/formConfig";
import "./register.css";
import Joi from "joi";

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
      <form
        className="form"
        onInput={onInput}
        onSubmit={onSubmit}
        name="registerForm"
      >
        <h1>Please enter your details</h1>
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
        <div className="formRow">
          <label>
            First Name:
            <input type="name" placeholder="First Name" name="firstName" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Last Name:
            <input type="name" placeholder="Last Name" name="lastName" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Gender:
            <select defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled>
                Select
              </option>
              {genders.map((gender, index) => (
                <option key={index} value={index}>
                  {gender}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="formRow">
          <label>
            Location:
            <input type="name" name="location" placeholder="town" />
            <input type="name" name="postcode" placeholder="postcode" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Height:
            <input type="number" placeholder="in cm" name="height" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Smokes?:
            <select defaultValue={"DEFAULT"} name="smokes">
              <option value="DEFAULT" disabled>
                Select
              </option>
              {smokes.map((smokes, index) => (
                <option key={index} value={index}>
                  {smokes}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="formRow">
          <label>
            Do you have any kids?:
            <select defaultValue={"DEFAULT"} name="haveKids">
              <option value="DEFAULT" disabled>
                Select
              </option>
              <option value="0">No</option>
              <option value="1">Yes</option>
              <option value="2">Prefer not to say</option>
            </select>
          </label>
        </div>
        <div className="formRow">
          <label>
            Do you want kids in the future?
            <select defaultValue={"DEFAULT"} name="wantKids">
              <option value="DEFAULT" disabled>
                Select
              </option>
              {wantKids.map((kids, index) => (
                <option key={index} value={index}>
                  {kids}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="formRow">
          <label>
            Religion:
            <select defaultValue={"DEFAULT"} name="religion">
              <option value="DEFAULT" disabled>
                Select
              </option>
              {religions.map((religion, index) => (
                <option key={index} value={index}>
                  {religion}
                </option>
              ))}
            </select>
          </label>
        </div>
        <input type="submit" value="Register"></input>
      </form>
    </>
  );
};

export default Register;
